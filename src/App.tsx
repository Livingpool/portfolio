import { Home, About, Projects, Contact, Navbar } from './components';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <main>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
  );
}