import React from 'react'
import styled from 'styled-components'
import { PageHero, Idea } from '../components'
const IdeaPage = () => {
  return( 
    <main>
      <PageHero title='idea & inspiration'/>
      <Wrapper className="page section section-center">
        <article>
          <div className='title'>
            <h2>Idea & Inspiration</h2>
            <div className='underline'></div>
          </div>
          <div>
          <p>
          Find the inspiration, ideas, and products for 
          every corner of your life at home. 
          All your home furnishings needs, from room 
          furniture to home décor are here, as well as furnishing knowledge 
          and décor inspiration to make your home truly yours.
          </p>
          </div>
          <Idea/>
        </article>
      </Wrapper>
    </main>
    )
  }
  
  const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
      width: 100%;
      display: block;
      border-radius: var(--radius);
      height: 500px;
      object-fit: cover;
    }
    p {
      line-height: 2;
      max-width: 45em;
      //margin: 0 auto;
      margin-top: 1rem;
      color: var(--clr-grey-5);
      text-align: justify;
    }
    .title {
      text-align: left;
    }
    .underline {
      margin-left: 0;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  `

export default IdeaPage
