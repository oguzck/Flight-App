import React, { useState } from 'react';
import './App.css';
import Container from './app/components/Container';
import Navbar from './app/components/Navbar';
import 'semantic-ui-css/semantic.min.css'
import { Routes, Route } from 'react-router-dom';
import Flights from './app/components/Flights';
import { ToastContainer } from 'react-toastify';


function App() {
  const[params,setParams] = useState();
  return (

    <div className='App'>
    <ToastContainer/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Container setParams={setParams} />} />
        <Route path='/flights' element={<Flights params={params} />} />
      </Routes>
      </div>
  


  );
}

export default App;
