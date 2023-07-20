// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../src/navbar.css';

//  function Navbar(){

//     return (
//       <div className='bg'>
//     {/* <nav> */}
      
      
//         <li><div class="search">
//     <input type="text" class="search__input" placeholder="Type your text"></input>
//     <button class="search__button">
//         <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
//             <g>
//                 <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//             </g>
//         </svg>
//     </button>
// </div></li>
//         <li>
//         <Link to ="/home"><button class="button">
//     <span class="button-content">Home </span>
// </button></Link>
//         </li>
//         <li>
//         <Link to="/world"><button class="button">
//     <span class="button-content">World </span>
// </button></Link>
//         </li>
        
//         <li>
//         <Link to="/entertaiment"><button class="button">
//     <span class="button-content">Entertainment </span>
//  </button>
// </Link>
//         </li>
//         <li>
//         <Link to ="/newsapi"><button class="button">
//     <span class="button-content">Latest News </span>
// </button></Link>
//         </li>
//         <li>
//         <Link to="/aboutus"><button class="button">
//     <span class="button-content">About us</span>
//  </button>
// </Link>
//         </li>
//         <li>
//         <Link to="/"><button class="button">
//     <span class="button-content">Logout </span>
// </button></Link>
//         </li>
      
//     {/* </nav> */}
//     </div>

//   );
// }

// export default Navbar;

// import React from "react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import "./entertaiment";

function Navbar() {
    const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">News Aggregator</a>
      </div>
      <ul className="navbar-links">
        <li>
        <Link to='./home'><button class="button">
    <span class="button-content">Home </span>
</button></Link>
        </li>
        <li>
       <Link to ="/newsapi"><button class="button">
    <span class="button-content"> Latest Headlines </span>
</button></Link>
        </li>
        <li>
        <button class="button"><a class="button-content" onClick={toggleCategories}>
            Categories
          </a></button>
          {showCategories && (
            <ul className="navbar-dropdown">
              <li>
       <Link to ="/bussiness"><button class="button">
    <span class="button-content"> Bussiness </span>
</button></Link>
        </li>
              <li>
                <a href="/category2">Category 2</a>
              </li>
              <li>
                <a href="/category3">Category 3</a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          )}
        </li>
        <li>
       <Link to ="/bussiness"><button class="button">
    <span class="button-content"> Bussiness </span>
</button></Link>
        </li>
        <li>
       <Link to ="/entertaiment"><button class="button">
    <span class="button-content">Entertaiment</span>
</button></Link>
        </li>
        <li>
       <Link to ="/game"><button class="button">
    <span class="button-content">Sport</span>
</button></Link>
        </li>
        <li>
       <Link to ="/technology"><button class="button">
    <span class="button-content">Technology</span>
</button></Link>
        </li>
        <li>
        <Link to="/aboutus"><button class="button">
    <span class="button-content">About </span>
</button></Link>
        </li>
        <li>
        <button class="button">
    <span class="button-content">Contact </span>
</button>
        </li>
      </ul>
      <div className="navbar-buttons">
      <Link to="/"><button class="button">
    <span class="button-content">Login </span>
</button></Link>
<Link to="/register"><button class="button">
    <span class="button-content">Sign Up </span>
</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;

