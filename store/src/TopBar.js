import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Selection from './img/Selection.png';
import axios from 'axios';
import {NavLink, useHistory} from 'react-router-dom';
import {DropdownButton, SplitButton, Dropdown, ButtonGroup} from 'react-bootstrap';

const TopBar = (props) => { 
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [apiKey, setApiKey] = useState("AIzaSyCnGiOUTd7RBgYr-c-_AzYRmg3fQjaVBO8");
  const [books, setBooks] = useState([]);
  const [home, setHome] = useState();
  const [name, setName] = useState('');
  const [preferOne, setPreferOne] = useState('');
  const [preferTwo, setPreferTwo] = useState('');
  const [preferThree, setPreferThree] = useState('');

  let history = useHistory();

  const go = () => {
    history.push('/browse');
    window.location.reload();
  }
  

  const getUser = async () => {
    try {
      const res = await fetch("/choices", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();
      console.log(parseRes[0])
      let userName = parseRes[0].user_name;
      let num = userName.indexOf(" ");
      if (num < 0) {
        setName(parseRes[0].user_name)
      } else {
      var firstName = userName.slice(0, num);

      setName(firstName)
}
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUser();
    if (!localStorage.prefOne) {
      setPreferOne('History')
      localStorage.setItem('prefOne', 'History');
    } else {
      setPreferOne(localStorage.prefOne)
    }
    if (!localStorage.prefTwo) {
      setPreferTwo('Fiction')
      localStorage.setItem('prefTwo', 'Fiction');

    } else {
        setPreferTwo(localStorage.prefTwo)
    }
    if (!localStorage.prefThree) {
      setPreferThree('Politics')
    } else {
        setPreferThree(localStorage.prefThree)
        localStorage.setItem('prefThree', 'Politics');

    }

  }, []);



  useEffect(() => {
    setHome(props.homepage)
  }, [])

  const send = (e) => {
    history.push('/filter')
  }


  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  

  const openSlideMenu = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeSlideMenu = () => {
    setIsNavOpen(false);
  }

  const logout = () => {
    localStorage.removeItem("token")
    window.location.reload();
  }

  const prefOne = async e => {
    e.preventDefault();
    console.log(e.target.id)
    setPreferOne(e.target.id)
    localStorage.setItem('prefOne', e.target.id)
    const myHeaders = new Headers();
    myHeaders.append("jwt_token", localStorage.token);
        axios.post('/choices', {choice: e.target.id}, {headers: {jwt_token: localStorage.token}
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  };

  


  const prefTwo = e => {
    console.log(e.target.id)
    setPreferTwo(e.target.id)
    localStorage.setItem('prefTwo', e.target.id)
    const myHeaders = new Headers();
    myHeaders.append("jwt_token", localStorage.token);
        axios.post('/choices', {choice: e.target.id}, {headers: {jwt_token: localStorage.token}
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const prefThree = e => {
    console.log(e.target.id)
    setPreferThree(e.target.id)
    localStorage.setItem('prefThree', e.target.id)
    const myHeaders = new Headers();
    myHeaders.append("jwt_token", localStorage.token);
        axios.post('/choices', {choice: e.target.id}, {headers: {jwt_token: localStorage.token}
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  
  return (
    <div>
    <div className='top-bar-container'>
      <div className="nav-blur-container">
      <div className="nav-blur-flex">
      <ul className={isNavOpen === true ? "slide-nav" : "close-nav"}>
        <div className='nav-list'>
          <a href="/login">Log In</a>
          <a href="/signIn">Sign Up</a>
          <a onClick={logout} href="#">Sign Out</a>
        </div>
      </ul>
      <div onClick={closeSlideMenu} className="blur">
      </div>
</div>

      </div>
      <div className='top-items-one'>
      <a href="#" onClick={openSlideMenu}>
            <FontAwesomeIcon className="fa fa-bars" icon={faBars} />
        </a>

        <NavLink to='/home'><img className='store-logo' src={Selection} alt='store-logo' /></NavLink>
        { name.length === 0 ?
        <div className='login'>
        <NavLink to='/login'><a href="#m">
            Login
        </a></NavLink>
        <NavLink to='/signin'><a href="#">
            Signup
        </a></NavLink>
        </div>
         : <div className='login'>
           <p>Hey there  { name}!</p>
         <a onClick={logout} href="#m">
            Logout
        </a>
        </div> }
      </div>
        
      <div className='top-items-two'>
      <div>
          {['Secondary'].map(
        (variant) => (
          <SplitButton
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={preferOne.length === 0 ? '1st Preference' : preferOne}
            size='sm'
            onClick={go}
          >
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='Fiction' >
              Fiction
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='History'  >
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='Science'  >
              Science
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='Fantasy'  >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='Romance'  >
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefOne}  id='Politics'  >
              Politics
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        ),
      )}
      </div>   
      <div>
          {['Secondary'].map(
        (variant) => (
          <SplitButton
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={preferTwo.length === 0 ? '2nd Preference' : preferTwo}
            size='sm'
            onClick={go}

          >
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='Fiction' >
              Fiction
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='History'  >
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='Science'  >
              Science
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='Fantasy'  >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='Romance'  >
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefTwo}  id='Politics'  >
              Politics
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        ),
      )}
      </div>        
      <div>
          {['Secondary'].map(
        (variant) => (
          <SplitButton
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={preferThree.length === 0 ? '3rd Preference' : preferThree}
            size='sm'
            onClick={go}

          >
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='Fiction' >
              Fiction
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='History'  >
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='Science'  >
              Science
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='Fantasy'  >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='Romance'  >
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={prefThree}  id='Politics'  >
              Politics
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        ),
      )}
      </div>        
     
  <form onSubmit={send} className='form'>
      <input onChange={changeHandler} className='input' />
      <NavLink to='/filtered'><button type='submit' onClick={send}>GO</button></NavLink>
      </form>
      </div>

      </div>


    </div>
  )
}

export default TopBar;
