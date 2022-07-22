import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import MainComponent from './components/MainComponent';
import CategoryDetails from './components/CategorydetailsComponent';
import { useEffect, useState } from 'react';
import './css/style.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
/* <Switch>a
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/category/${}">
      <About />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
</Switch> */
export default () => {
 
  return (
    
    <div className="App">
     
      <div className='Container'>
      <NavbarComponent />
        <div className='pt-5'>
        <Router>
          <Routes>
            <Route exact path="/" element={<MainComponent/>}/>
            <Route path="/category/:strCategory" element={<CategoryDetails/>}/>
          </Routes>
        </Router>
        </div>
      </div>
    </div>

    


  );
}
