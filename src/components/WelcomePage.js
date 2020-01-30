import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
          
        <div className="header-button">
        <button className='welcome-button'><Link to = '/Characters'>Wubba Lubba Dub Dub</Link></button>
      </div>
      </header>
    </section>
  );
}
