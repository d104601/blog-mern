import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {

  return (
    <div className="App bg-black text-white font-mono">
      <header className="py-4">
        <Navbar/>
      </header>
      <div className="h-full">
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
