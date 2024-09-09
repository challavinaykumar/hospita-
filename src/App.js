import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Main/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './Margin/Margin.css'
import Nav from './Components/Nav';
import About from './Main/About';
// import Doctors from './Main/Doctors';
import Ourdoctors from './Main/Ourdoctors';
import Contact from './Main/Contact';
import Peripheral from './Main/Dropdown/Peripheral';
import Cardiovascular from './Main/Dropdown/Cardiovascular';
import Pulmonology from './Main/Dropdown/Pulmonology';
import Venous from './Main/Dropdown_2/Venous';
import Arterial from './Main/Dropdown_2/Arterial';
import Endovascular from './Main/Dropdown_2/Endovascular';
import Cerebrovascular from './Main/Dropdown_2/Cerebrovascular';
import Renovascular from './Main/Dropdown_2/Renovascular';
import Cardio from './Main/Dropdown_2/Cardio';
import ScrollToTop from './Main/Scroll';
import Chat from './Main/Chatbot';
// import Cardiovascular from './Main/Dropdown_2/Cardiovacular';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <Nav/>
      <Chat/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Ourdoctors' element={<Ourdoctors/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Pheriperal' element={<Peripheral/>}/>
        <Route path='/Cardiovascular' element={<Cardiovascular/>}/>
        <Route path='/Pulmonology' element={<Pulmonology/>}/>
        <Route path='/Venous' element={<Venous/>}/>
        <Route path='/Arterial' element={<Arterial/>}/>
        <Route path='/Endovascular' element={<Endovascular/>}/>
        <Route path='/Cerebrovascular' element={<Cerebrovascular/>}/>
        <Route path='/Renovascular' element={<Renovascular/>}/>
        <Route path='/Cardio' element={<Cardio/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;