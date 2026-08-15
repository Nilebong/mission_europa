import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Track from './components/Track';
import About from './components/About';
import Credit from './components/Credit';

export default function App() {
  return (
    <div style={{ background: '#020408', minHeight: '100vh' }}>
      <Nav />
      <Hero /> 
      <Track /> /*I had to remove the api function atleast becuase the api was not working with deloyed version no matter what I did.*/
      <About />
      <Credit />
    </div>
  );
}
