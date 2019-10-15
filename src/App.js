import React from "react";
import { Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main className="main-container">
      <Header />

     
      <Route exact path = '/search' component = {SearchForm} />
      <Route exact path = '/characters' component = {CharacterCard} />
      <Route exact path = '/' component = {WelcomePage} />
    
    </main>
  );
}

