import React, {useState,useEffect} from 'react';
import './App.css';
import Nav from './lib/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home';
import Dashboard from './routes/App';
  
function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <>
    <Nav/>
    <Router>
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/app" element={<Dashboard/>}/>    
     </Routes>
    </Router>
    </>
  );
}

export default App;