import React, {useState, useEffect} from 'react';
import './Browse.scss';
import TopBar from './TopBar';
import axios from 'axios';
import Carousel, {WithStyles} from "react-multi-carousel";
import Footer from './Footer';

const Browse = (props) => {
  const [brwosePage, setBrowsePage] = useState();
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);
  const [fiction, setFiction] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyCnGiOUTd7RBgYr-c-_AzYRmg3fQjaVBO8");
console.log(books)

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:history&${apiKey}&maxResults=10&orderBy=newest`)
      .then( res => {
        console.log(res.data.items)
        setBooks(res.data.items)

      })
      .catch(err => {
        console.log(err)
      })
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&${apiKey}&maxResults=10&orderBy=newest`)
      .then( res => {
        console.log(res.data.items)
        setFiction(res.data.items)

      })
      .catch(err => {
        console.log(err)
      })

      axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:politics&${apiKey}&maxResults=10&orderBy=newest`)
      .then( res => {
        console.log(res.data.items)
        setPolitics(res.data.items)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 45
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
  
  return (
    <div className='browse-container'>

      <TopBar />
      <section className="browse-product-carousel">
      <h2 className='browse-set-tags'>History</h2>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 5000,
                min: 1024
              },
              items: 5,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
        {books.map((item, index) => {
              
              return <li className='browse-list-img'>
                      
                      <p>
                              
                      <a href={item.volumeInfo.infoLink}>
             
                          <img  src={item.volumeInfo.imageLinks.thumbnail} />
                          </a>
                          
                          </p>
                    </li >
        
              }) } 

      </Carousel>
    </section>
    <section className="browse-product-carousel">
      <h2 className='browse-set-tags'>Fiction</h2>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 5000,
                min: 1024
              },
              items: 5,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
        {fiction.map((item, index) => {
              
              return <li className='browse-list-img'>
                      
                      <p>
                              
                      <a href={item.volumeInfo.infoLink}>
             
                          <img  src={item.volumeInfo.imageLinks.thumbnail} />
                          </a>
                          
                          </p>
                    </li >
        
              }) } 

      </Carousel>
    </section>
    <section className="browse-product-carousel">
      <h2 className='browse-set-tags'>Politics</h2>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 5000,
                min: 1024
              },
              items: 5,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
        {politics.map((item, index) => {
              
              return <li className='browse-list-img'>
                      
                      <p>
                              
                      <a href={item.volumeInfo.infoLink}>
             
                          <img  src={item.volumeInfo.imageLinks.thumbnail} />
                          </a>
                          
                          </p>
                    </li >
        
              }) } 

      </Carousel>
    </section>
    <Footer />

    </div>
  )
}

export default Browse;