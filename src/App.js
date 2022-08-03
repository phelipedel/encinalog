
import React from "react";
import { BrowserRouter as Nav, Route, Routes, } from 'react-router-dom';
import Home from "./page/Home"



function App() {
  return (
    <Nav>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  </Nav>
  );
}

export default App;
