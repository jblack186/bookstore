import React, { useEffect, useCallback, useState } from 'react';
import './CardCarousel.css';
import axios from 'axios'


const CardCarousel = (props) => {
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyCnGiOUTd7RBgYr-c-_AzYRmg3fQjaVBO8");


  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=fiction&${apiKey}&maxResults=10`)
      .then( res => {
        console.log(res.data.items)
        setBooks(res.data.items)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])
console.log('books', books)

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  // useEffect(() => {
  //   props.books.map(item => {
  //    setLibrary(prevState => {
  //      return {
  //        ...prevState,
  //        pic: item.volumeInfo.imageLinks.thumbnail
  //      }
  //    })
     
  //   })
  
  // }, [props])
console.log(library)
  
  const cardItems = [
    {
      id: 1,
      title: 'Stacked Card Carousel',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
    },
    {
      id: 2,
      title: 'Second Item',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'A Third Card',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.',
    },
    {
      id: 4,
      title: 'Fourth',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return 'active';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next';
    } else if (indexes.previousIndex === cardIndex) {
      return 'prev';
    }
    return 'inactive';
  }

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000); // The interval value could also be a prop
  
    // Clear the interval when the component unmounts!
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);
  
  // const CardCarousel = () => { ... }

	return (
    <div className="container">
      
      {books.map((item, index) => {
       
      return <li className={`card ${determineClasses(indexes, index)}`}>
             
              <p>      
                <h2>Recommended for You</h2>
                 <a href={item.volumeInfo.infoLink}> <img  src={item.volumeInfo.imageLinks.thumbnail} />
                 </a>
                 </p>
            </li >

      }) }
    {/* <button onClick={handleCardTransition}>Transition to Next</button> */}
    <ul className="card-carousel">
    </ul>
  </div>
  );
}

export default CardCarousel;