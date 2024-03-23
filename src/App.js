//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import Detail from './Detail';
import List from './List';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/user/:userId" element={<Detail />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
