import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from './Pages/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-account" element={ <Register/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
