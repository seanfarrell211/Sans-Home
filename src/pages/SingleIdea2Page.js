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


  const {name,desc1,desc2,header,images,} = idea
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
          <hr />
          <h2>{desc1}</h2>
          <h2>{desc2}</h2>
          <h2>{header}</h2>
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
