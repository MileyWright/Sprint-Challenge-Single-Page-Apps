import React from "react";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered"> 
   <Link to = '/Search'>
     <button className = 'search'>Search</button>
     </Link>
     <Link to = '/characters'>
     <button className = 'search'>Characters</button>
     </Link>
     <Link to = '/'>
     <button className = 'search'>Home</button>
     </Link> 
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
   
    </header>
  );
}
