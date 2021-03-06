require('dotenv').config()
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appGsVXh5XoDKuAQc')
  .table('products')

exports.handler = async (event, context, cb) => {
    const { id } = event.queryStringParameters
    if(id){
        try {
            const product = await airtable.retrieve(id)
            if(product.error){
                return {
                    statusCode: 404,
                    body:`No product with id: ${id}`,
                }
            }
            return {
                headers: {
                    'Access-Control-Allow-Origin':'*',
                },
                statusCode:200,
                body: JSON.stringify(product),
            }
        }catch (error){
            return {
                statusCode: 500,
                body: 'Server error',
            }
        }
    }
    try {
        const {records} = await airtable.list()
        const products = records.map((product) => {
            const{id} = product
            const {name,image,price,description,colors,company,stock,stars,reviews,category,shipping} = product.fields
            const url = image[0].url
            return {id,name,url,price,description,colors,company,stock,stars,reviews,category,shipping}
        })
        return {
            headers: {
                'Access-Control-Allow-Origin':'*',
            },
            statusCode: 200,
            body: JSON.stringify(products),
        }
    }catch(error){
        return {
            statusCode: 500,
            body: 'Server error',
        }
    }
}