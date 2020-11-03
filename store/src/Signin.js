import React, {useState} from 'react';
import './Signin.scss';
import Pic from './img/signin-pic.jpg';
import Books from './img/bookonshelf .png';
import TopBar from './TopBar';
import Footer from './Footer';


const SignIn = () => {


  return (
    <div>
      <TopBar />
      <section className='signin-container'>
        <img src={Pic} alt='man-holding-book' />
        <div className='sign-img-contain'>
          <img className='book-logo-sign' src={Books} alt='book-logo' /> 
          <h1>The Online Library</h1>
          <p>Reading can give you superpowers. Learn, imagine, and escape with us. We can't wait for you to visit our library.</p>
        </div>
        <h3>We'd love to have you. Take some time out to register.</h3>
        <form>
          <input placeholder='name'/>
          <input placeholder='email' />
          <input placeholder='password' />
          <button>Register</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default SignIn;