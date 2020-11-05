import React, {useState} from 'react';
import './Signin.css';
import Pic from './img/signin-pic.jpg';
import Books from './img/bookonshelf .png';
import TopBar from './TopBar';
import Footer from './Footer';
import { toast } from "react-toastify";
import {useHistory} from 'react-router-dom';

const SignIn = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: ""
    });
    let history = useHistory();

  const { email, password, name } = inputs;

  console.log(email, name)

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { email, password, name };
        const response = await fetch(
          "https://bookstore12.herokuapp.com/auth/register",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
        const parseRes = await response.json();
  
        if (parseRes.jwtToken) {
          localStorage.setItem("token", parseRes.jwtToken);
          toast.success("Register Successfully");
          history.push('/home')

          
        } else {
          toast.error(parseRes);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

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
        <form onSubmit={onSubmitForm}>
          <input type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"/>
          <input type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={e => onChange(e)}
          className="form-control my-3" />
          <input type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"/>
          <button>Register</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default SignIn;