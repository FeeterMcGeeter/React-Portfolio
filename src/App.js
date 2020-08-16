import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './main.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;