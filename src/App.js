import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import BusinesCases from './components/BusinesCases/BusinesCases';
import Blog from './components/Blog/Blog';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <BusinesCases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
