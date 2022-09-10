import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './utils/auth';

import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div className="App font-mono">
      <header className="py-4">
        <Navbar />
      </header>
      <div>
        <Router>
          <>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={Auth.loggedIn() ? <Dashboard /> : <Signin />}
              />
              <Route path="/post/:postId" element={<Post />} />
              <Route path="/dashboard/newpost" element={<NewPost />} />
              <Route path="/dashboard/edit" element={<EditPost />} />
              <Route path='*' element={<h1>Wrong Page!</h1>} />
            </Routes>
          </>
        </Router>
      </div>
    </div>
  );
}

export default App;
