import './App.css';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>

          </Route>
          <Route path="/search" element={<SearchPage/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
};

//export default App;