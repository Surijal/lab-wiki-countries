import React from 'react';
import CountryList from './components/CountryList';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail'

import { Route, Switch } from 'react-router-dom';

import countries from './countries.json';


const countriesList = countries;


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <div className="container">
          <div className='row'>
          <CountryList  countries ={countriesList}  />
        <Route exact path="/:id" component={CountryDetail} />
          </div>
        </div>
    </div>
  );
}

export default App;
