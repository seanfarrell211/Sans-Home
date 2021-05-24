import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
 import { single_idea_url as url } from '../utils/constants'
import {
  Loading,
  ProductImages,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleIdea2Page = () => {
  const { id} = useParams()
  const history = useHistory()
  const { single_idea_loading:loading,
  single_idea_error:error,
  single_idea:idea,
  fetchSingleIdea,
  } = useProductsContext()

  useEffect(() => {
   fetchSingleIdea(`${url}${id}`)
   // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])
  
  if (loading) {
    return <Loading />
  }
  if (error) {
    return document.write(error.message)
  }


  const {name,desc1,desc2,desc3,header,header2,images,
    nameprod1,uniqueid1,nameprod2,uniqueid2,} = idea
  //const {id:sku} = idea

  console.log(idea)
  return (
  <Wrapper>
    <PageHero title={name} product />
    <div className ='section section-center page'>
      <Link to='/idea' className ='btn'>
        back to idea
      </Link>
      <div className ="product-center">
        <ProductImages images={images} />
        <section className ='content'>
          <h2>{name}</h2>
          <div className='underline'></div>
          <p className='desc'>{desc1}</p>

          <h3 className='space'>{header}</h3>
          <p className='desc'>{desc2}</p>

          <h3 className='space'>{header2}</h3>
          <p className='desc'>{desc3}</p>
        <Link to={`/products/${uniqueid1}`} className ='btn'>
          Check {nameprod1} 
        </Link>
        <Link to={`/products/${uniqueid2}`} className ='btn'>
          Check {nameprod2} 
        </Link>
        </section>
      </div>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .space{
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .underline {
  width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  background: var(--clr-primary-5);
  margin-left: 0;
  margin-right: auto;
  }
  .btn{
    margin-right: 4px;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleIdea2Page
