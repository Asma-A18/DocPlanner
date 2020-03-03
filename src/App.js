import React, { Fragment } from 'react';
import Nav from './components/nav.js';
import Intro from  './components/intro.js';
import Docpatients from  './components/doc-patients';
import Stats from './components/Statistics'
import Section from './components/section'
import Countries from './components/countries'
import Footer from './components/footer'
import {Navmenu, Forpatients, Fordocs, stat,intro,selectmenu,countries, improve } from "./components/data"
import './App.css';

function App() {
  return (
    <div className="App">
   <Nav property={Navmenu}/>
   <Intro intro = {intro}/>
   <Docpatients x={Forpatients} y={Fordocs} z={selectmenu}   />
  <Stats s ={stat}/>
  <Section improve = {improve} /> 
  <Countries countries={countries}/>
    <Footer/>

    </div>

  );
}

export default App;
