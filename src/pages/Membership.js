import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import member from '../assets/membership.jpeg'

const Membership = () => {
  return( 
    <main>
      <PageHero title='membership'/>
      <Wrapper className="page section section-center">
        <img src ={member} alt="nice desk"/>
        <article>
          <div className='title'>
            <h3>Create Sans home Membership</h3>
            <div className='underline'></div>
            <br/>
          </div>
    <div className='content'>
      <form className='contact-form' 
        action="https://formspree.io/f/xeqpbjqq" 
        method="POST">
        <input type='text' 
          className='form-input' 
          placeholder='enter name'
          id='name'
          name='name'/>
          <br/>
        <input type='email' 
          className='form-input' 
          placeholder='Enter email'
          name='user email'/>
          <br/>
        <input type='password' 
          className='form-input' 
          placeholder='enter password'
          id='pwd'
          name='password'/>
          <br/>
        <input type='text' 
          className='form-input' 
          placeholder='enter your birthday DD-MM-YYYY'
          id='birth'
          name='birthday'/>
          <br/>
          <label className='agree'> I would like to receive news, tips and marketing offers from Sans Home.</label>
        <input type="checkbox" 
        id="agree" 
        name="verification" 
        value="true"
        className='checkbox'
        />
          <br/>
        <button type='submit' className='submit-btn'>
          Create membership
        </button>
        </form>
      </div>
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

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .checkbox{
    //padding: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom : 1rem;
    //float:left;
  }
  .agree {
    float:right;
    position:absolute;
    top:34.2rem;
    right:14rem;
    color: darkred
   // padding-right: 10px;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    //border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(40%);
    border-bottom-left-radius: var(40%);
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
`

export default Membership
