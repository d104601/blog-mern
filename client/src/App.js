import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {

  return (
    <div className="App font-mono">
      <header className="py-4">
        <Navbar/>
      </header>
      <div>
      <Router>
        <>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='*' element={<h1>Wrong Page!</h1>}/>
        </Routes>
        </>
      </Router>
      </div>
    </div>
  );
}

export default App;
