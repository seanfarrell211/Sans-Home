import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return( 
  <main>
    <PageHero title='about'/>
    <Wrapper className="page section section-center">
      <img src ={aboutImg} alt="nice desk"/>
      <article>
        <div className='title'>
          <h2>about us</h2>
          <div className='underline'></div>
        </div>
        <p>
        Sans home is the global marketplace for unique and creative goods. 
        It’s home to a universe of special, extraordinary items, from unique handcrafted pieces to vintage treasures.
        </p>
        <p>
        In a time of increasing automation, it’s our mission to keep human connection at the heart of commerce. 
        That’s why we built a place where creativity lives and thrives because it’s powered by people. 
        We help our community of sellers turn their ideas into successful businesses. 
        Our platform connects them with millions of buyers looking 
        for an alternative—something special with a human touch, for those moments in life that deserve imagination.
        </p>
        <p>
        As a company, we strive to lead with our guiding principles and to help spread ideas of sustainability 
        and responsibility whose impact can reach far beyond our own business.
        </p>
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
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
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
export default AboutPage
