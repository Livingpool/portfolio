import { Home, About, Projects, Contact, Navbar } from './components';
import { Element } from 'react-scroll';
import { useAnimation } from 'framer-motion';

export default function App() {
  const controlsHome = useAnimation();
  const controlsAbout = useAnimation();
  const controlsProjects = useAnimation();
  const controlsContact = useAnimation();

  return (
    <main>
      <Navbar />
      <Element name="home" onSetActive={() => controlsHome.start('show')}>
        <Home controls={controlsHome} />
      </Element>
      <Element name="about" onSetActive={() => controlsAbout.start('show')}>
        <About controls={controlsAbout} />
      </Element>
      <Element name="projects" onSetActive={() => controlsProjects.start('show')}>
        <Projects controls={controlsProjects} />
      </Element>
      <Element name="contact" onSetActive={() => controlsContact.start('show')}>
        <Contact controls={controlsContact} />
      </Element>
    </main>
  );
}