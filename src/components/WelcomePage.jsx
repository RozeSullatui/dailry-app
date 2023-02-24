import React from 'react'
import {Link} from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">HomePageへGO‼</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default WelcomePage