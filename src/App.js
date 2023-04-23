import React from 'react';
import Home from './components/Homepage/Home';
import Instructor from './components/Instructorpage/Instructor'
import Module from './components/Modulepage/Module'
import './App.css';
import Assignment from './components/Modulepage/Assignment';
import Quiz from './components/Modulepage/Quiz';
import Topc from './components/Modulepage/Topc';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/module' element={<Module/>}>
        <Route index element={<Topc/>}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='assignment' element={<Assignment/>}/>
      </Route>
      <Route path='/instructor' element={<Instructor/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
