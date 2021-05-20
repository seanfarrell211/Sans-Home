import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import SingleIdea from './SingleIdea'

const Idea = () => {
  const {
    idea_loading:loading, 
    idea_error:error,
    featured_idea:featured
  } = useProductsContext()
  if(loading){
    return <Loading />  
  }
  if(error){
    return <Error />
  }
  
  return (
  <Wrapper>
    <div className='section-center featured'>
      {featured.slice(0,6).map((idea) =>{
        return <SingleIdea key={idea.id} {...idea} />
      })}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  //background: var(--clr-grey-10);
  .featured {
    //margin: 4rem auto;
    display: grid;
    gap: 2rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default Idea
