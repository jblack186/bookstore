import React, { useState, useEffect } from 'react';
import './Filtered.css';
import axios from 'axios';
import TopBar from './TopBar';
import Footer from './Footer';


const Filtered = (props) => {
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyCnGiOUTd7RBgYr-c-_AzYRmg3fQjaVBO8");
  const [home, setHome] = useState();


  useEffect(() => {
    setHome(false)

    let search = localStorage.getItem('search')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&${apiKey}&maxResults=20&orderBy=newest`)
      .then( res => {
        console.log(res.data.items)
        setBooks(res.data.items)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <TopBar homepage={home} />

    <div className='filter-container'>
        {books.map((item, index) => {
              
              return <li className='filtered-list-img'>
                      
                      <p>
                              
                      <a href={item.volumeInfo.infoLink}>
             
                          <img  src={item.volumeInfo.imageLinks.thumbnail} />
                          </a>
                          
                          </p>
                          <a href={item.volumeInfo.infoLink}>
                                    <div className='filt-card-desc'>
                                    <a className='title'>
                                      {item.volumeInfo.title.length < 10 ? item.volumeInfo.title : <p>{item.volumeInfo.title.slice(0,17)}...</p>}
                                    </a>
                                    <a className='author'>
                                      By: {item.volumeInfo.authors}
                                    </a>
                                    <a className='author'>
                                       {item.volumeInfo.categories}
                                    </a>
                                    
                                    </div>
                                    </a>
                                    </li >
              }) } 
             
    </div>
    <Footer />
    </>
  )
}

export default Filtered;