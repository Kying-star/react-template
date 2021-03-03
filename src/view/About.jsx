import React, { useState } from 'react';
import { Link } from "react-router-dom";
const About = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <h1>About</h1>
      <p>the num is{num}</p>
      <button onClick={() => setNum(num + 1)}>add</button>
    </div>
  )
}

export default About