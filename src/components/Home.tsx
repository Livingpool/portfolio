import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import linkedin from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github_black.svg'
import minion from '../assets/images/stuart.png';

export function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 }, // start from a lower position and fully transparent
    animate: { opacity: 1, y: 0 }  // end at the original position and fully visible
  };
  
  return (
    <div id="home" className="container mx-auto px-4 mt-60 flex justify-between">
      <div className="head-text">
        <motion.p {...fadeInUp} className='mb-2 font' style={{ fontSize: '20px' }}>
          Hi there! I'm
        </motion.p>
        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className='font' style={{ fontSize: '90px' }}>
          Tim Liu.
        </motion.p>
        <motion.p {...fadeInUp} transition={{ delay: 0.4 }} className='mb-5 font text-gray-500' style={{ fontSize: '50px' }}>
          I build things for the web.
        </motion.p>
        <motion.p {...fadeInUp} transition={{ delay: 0.6 }} className='font text-yellow-800' style={{ fontSize: '24px' }}>
          Full Stack Developer.
        </motion.p>
        <motion.p {...fadeInUp} transition={{ delay: 0.8 }} className='mb-2 font text-yellow-800' style={{ fontSize: '24px' }}>
          1 Year of Experience.
        </motion.p>

        <motion.div {...fadeInUp} transition={{ delay: 1.0 }}>
          <Link to="/contact" className="home-btn px-20 py-4 font hover:bg-yellow-500 hover:text-white transition-colors duration-200" style={{ fontSize: "20px" }}>Contact</Link>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 1.2 }} className='social-media'>
          <a href="https://www.linkedin.com/in/ting-wei-liu-12a50626b/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/Livingpool" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </motion.div>
      </div>
      <img src={minion} alt="Minion" className="w-2/5 h-auto transform -translate-y-16" />
    </div>
  );
}

export default Home;