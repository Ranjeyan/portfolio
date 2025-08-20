import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Demo from './Components/Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Ranjeyan from '../src/assets/R.png';
import ProjectScreen from './Components/ProjectScreen';

function Loader() {
  return (
    <div className="loader">
      <img src={Ranjeyan} alt="Loading..." className="logo-loader" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className='bg'></div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/project/:projectId" element={<ProjectScreen />} /> 
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
