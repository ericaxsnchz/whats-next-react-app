import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <div className="home1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quidem repudiandae maiores molestiae dignissimos eos dicta vel, 
                doloribus quos. Quas corrupti esse corporis totam hic adipisci iste.
            </p>
        </div>
        <div className="home2">
            <p>Ready to get started? Begin your to-do list today!</p>
            <Link to="/to-do">
              <button type="button">create list</button>
            </Link>
        </div>
    </div>
  )
}
