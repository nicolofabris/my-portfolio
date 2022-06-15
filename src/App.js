import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
      </>
    </div>
  );
}

export default App;
