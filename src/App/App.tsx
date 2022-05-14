import React from 'react';
// import '../../sass/main.scss';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Tours from '../components/Tours/Tours';
import Stories from '../components/Stories/Stories';
import ContactForm from '../components/ContactForm/ContactForm';
const App = () => {

  return (
    <div>
        <Header />
        <About />
        <Features />
        <Tours />
        <Stories />
        <ContactForm />
    </div>
  )
}

export default App;