import React, {useState} from 'react';
import './Browse.scss';
import TopBar from './TopBar';

const Browse = (props) => {
  const [brwosePage, setBrowsePage] = useState();

  return (
    <div>
      <TopBar />
    </div>
  )
}

export default Browse;