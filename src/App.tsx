import { Home, About, Projects, Contact, Navbar, Footer, Background } from './components';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <main>
      <Navbar />
      <Background />
      <Element name="home" className='pt-10'>
        <Home />
      </Element>
      <Element name="about" className='pt-0.5'>
        <About />
      </Element>
      <Element name="projects" className='pt-0.5'>
        <Projects />
      </Element>
      <Element name="contact" className='pt-0.5'>
        <Contact />
      </Element>
      <Footer />
    </main>
  );
}