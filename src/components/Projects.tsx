import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import stickyNote from '../assets/images/sticky-note.png';

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
    <motion.div id="about" className="container mx-auto px-4 mt-40 flex justify-between" ref={ref} animate={controls} initial='hidden'>
      <div className="head-text">
        <motion.h1 variants={fadeInUp} className='mb-2 font text-yellow-700' style={{ fontSize: '40px' }}>
          My Projects
        </motion.h1>
        <motion.div variants={fadeInUp} transition={{ delay: 0.1 }} className='font' style={{ fontSize: '20px' }}>
          <img src={stickyNote} alt="Sticky Note" className="w-2/5 h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
} 

export default Projects;