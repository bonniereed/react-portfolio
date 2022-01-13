import React from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <ContactMe />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
