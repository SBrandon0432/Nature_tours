import Header from '../components/Header/Header';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Tours from '../components/Tours/Tours';
import Stories from '../components/Stories/Stories';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const App = () => {


  return (
    <div className='App__components'>
        <Header />
        <About />
        <Features />
        <Tours />
        <Stories />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default App;