import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <div className="homepage">
        <div className="home1">
          <h2>first on your list: </h2>
            <p>1. lorem ipsum dolor sit amet consecte dictas </p>
            <p>2. blanditiis, aliquam</p>
            <p>3. orem ipsum dolor  elit</p>
            
        </div>
        <div className="home2">
          <FontAwesomeIcon icon={faListCheck} />
            <p>take your needs to the next level</p>
            <p>begin your to-do list today</p>
            <Link to="/to-do">
              <button type="button" className="grad-btn">create list</button>
            </Link>
        </div>
    </div>
  )
}
