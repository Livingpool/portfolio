import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import stickyNote from '../../assets/images/sticky-note.png';
import externalLink from "../../assets/images/external-link.png";
import './projects.css';

export function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // fade in from the bottom
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // start from a lower position and fully transparent
    show: { opacity: 1, y: 0 }  // end at the original position and fully visible
  };

  return (
    <motion.div id="projects" className="projects" ref={ref} animate={controls} initial='hidden'>
      <div className="w-full">
        <motion.h1 variants={fadeInUp} transition={{ duration: 0.5, ease: "easeOut" }} className='head-text'>
          My Projects
        </motion.h1>

        <motion.div variants={fadeInUp} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className='sticky-note-container'>
          <div className="sticky-note">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <header>
              <div className="project-link">
                <a href="https://github.com/Livingpool/feast-forward" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site"/>
                </a>
              </div>
            </header>
            <div className="body-text">
              <h2>FeastForward <br/> - Leftover Management Platform </h2>
              <p>
                This GitHub project creates a platform for users to share their leftovers, offering functionalities such as food listings, food map, and email notifications, etc.
              </p>
            </div>
            <footer className='footer-container'>
              <div> React &nbsp; Java &nbsp; MySQL &nbsp; GCP </div>
            </footer>
          </div>

          <div className="sticky-note">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <header>
              <div className="project-link">
                <a href="https://github.com/Livingpool/MoodBlog" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site"/>
                </a>
              </div>
            </header>
            <div className="body-text">
              <h2>MoodBlog <br/> - Diary with AI Feedback </h2>
              <p>
                This GitHub project is a simple diary web app that provides AI feedback on user's mood, using ChatGPT APIs.
              </p>
            </div>
            <footer className='footer-container'>
              <div> React &nbsp; Node.js &nbsp; MongoDB </div>
            </footer>
          </div>

          <div className="head-text sticky-note">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font text-yellow-900" style={{ fontSize: '20px' }}>
              <p>In the making...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 

export default Projects;