import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import MyImage from './assets/My_Pic.jpg';

function App() {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState('');

  // Function to handle scroll and check which section is in view
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
  };

  // Add scroll event listener to handle section highlight
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App flex h-[95vh] p-1">
      {/* Fixed Navbar */}
      <Navbar image={MyImage} activeSection={activeSection} />

      {/* Scrollable content area */}
      <div className="content flex-1 p-8 bg-gray-100 overflow-y-auto relative">
        {/* Sections */}
        <p className='font-bold text-xl'>In progress</p>
        <Section id="about" title="About" content="Welcome to my portfolio!" />
        <Section id="projects" title="Projects" content="Details about projects..." />
        <Section id="experience" title="Experience" content="Experience details..." />
        <Section id="education" title="Education" content="Educational background..." />
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

export default App;