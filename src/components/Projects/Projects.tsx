import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import stickyNote from '../../assets/images/sticky-note.png';
import externalLink from "../../assets/images/external-link.png";

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
    <motion.div id="projects" className="container mx-auto px-4 mt-20 mb-20 flex justify-between w-full" ref={ref} animate={controls} initial='hidden'>
      <div className="w-full">
        <motion.h1 variants={fadeInUp} transition={{ duration: 0.5, ease: "easeOut" }} className='head-text mb-2 font text-yellow-700' style={{ fontSize: '40px' }}>
          My Projects
        </motion.h1>

        <motion.div variants={fadeInUp} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} className='flex justify-between'>
          <div className="relative w-1/3 h-96 transition-transform duration-200 hover:-translate-y-2">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <header className='absolute top-10 right-7 z-20'>
              <div className="project-link p-1 inline-block">
                <a href="https://github.com/Livingpool/feast-forward" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" className='w-8 h-8'/>
                </a>
              </div>
            </header>
            <div className="body absolute top-14 left-14 right-10 z-10">
              <h1 className='head-text font' style={{ fontSize: '17px' }}>FeastForward <br/> - Leftover Management Platform </h1>
              <br/>
              <p>
                This GitHub project creates a platform for users to share their leftovers, offering functionalities such as food listings, food map, and email notifications, etc.
              </p>
            </div>
            <footer className='absolute bottom-0 left-4 p-10 text-yellow-900'>
              <div> React &nbsp; Java &nbsp; MySQL &nbsp; GCP </div>
            </footer>
          </div>

          <div className="relative w-1/3 h-96 transition-transform duration-200 hover:-translate-y-2">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <header className='absolute top-10 right-7 z-20'>
              <div className="project-link p-1 inline-block">
                <a href="https://github.com/Livingpool/MoodBlog" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" className='w-8 h-8'/>
                </a>
              </div>
            </header>
            <div className="body absolute top-14 left-14 right-10 z-10">
              <h1 className='head-text font' style={{ fontSize: '17px' }}>MoodBlog <br/> - Diary with AI Feedback </h1>
              <br/>
              <p>
                This GitHub project is a simple diary web app that provides AI feedback on user's mood, using ChatGPT APIs.
              </p>
            </div>
            <footer className='absolute bottom-0 left-4 p-10 text-yellow-900'>
              <div> React &nbsp; Express.js &nbsp; MongoDB </div>
            </footer>
          </div>

          <div className="head-text relative w-1/3 h-96 transition-transform duration-200 hover:-translate-y-2">
            <img src={stickyNote} alt="Sticky Note" className="absolute w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font" style={{ fontSize: '20px' }}>
              <p>In the making...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 

export default Projects;