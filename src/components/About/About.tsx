import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import reactIcon from '../../assets/icons/react-icon.svg';
import jsIcon from '../../assets/icons/js-icon.svg';
import tsIcon from '../../assets/icons/typescript-icon.svg';
import htmlIcon from "../../assets/icons/html-icon.svg";
import cssIcon from "../../assets/icons/css-icon.svg";
import golangIcon from '../../assets/icons/golang-icon.svg';
import cIcon from '../../assets/icons/c-icon.svg';
import cPlusPlusIcon from '../../assets/icons/c++-icon.svg';
import tim from '../../assets/images/skiing-tim.png';
import './about.css';

export function About() {
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

  // fade in from the left
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  // fade in from the right
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div id="about" className="about" ref={ref} animate={controls} initial='hidden'>
      <div className="head-text sm:w-full">
        <motion.h1 variants={fadeInLeft} transition={{ duration: 0.5, ease: "easeOut" }}>
          About Me
        </motion.h1>
        <motion.p variants={fadeInLeft} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}>
          Welcome to my site! 
          I'm Tim, a fresh graduate from National Taiwan University. 
          I am driven by my passion for web development and I am always eager to learn new things.
        </motion.p>
        <motion.p variants={fadeInLeft} transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }} className='mt-5'>
          As I am just starting out, I am open to any opportunities! 
          If you have any ideas that you would like to collaborate on, I'd love to have a chat and see how I can help.
          Let's make your website dreams come true!
        </motion.p>
        <motion.h2 variants={fadeInLeft} transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }} className='mt-5'>
          This is my main tech stack:
        </motion.h2>

        <motion.div className='icon-group'>
          <motion.div variants={fadeInUp} transition={{ delay: 0.10, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 xs:w-7 lg:w-10">
            <img src={reactIcon} alt="React" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.11, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 xs:w-7 lg:w-10">
            <img src={jsIcon} alt="JavaScript" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 xs:w-7 lg:w-10">
            <img src={tsIcon} alt="TypeScript" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.13, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 xs:w-7 lg:w-10">
            <img src={htmlIcon} alt="Html" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.14, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 xs:w-7 lg:w-10">
            <img src={cssIcon} alt="CSS" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }} className="hard-skills w-10 lg:w-14">
            <img src={golangIcon} alt="Golang" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 lg:w-9">
            <img src={cIcon} alt="C" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.17, duration: 0.5, ease: "easeOut" }} className="hard-skills w-6 lg:w-9">
            <img src={cPlusPlusIcon} alt="C++" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeInRight} transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }} className='me-container'>
        <img src={tim} alt="Tim"/>
      </motion.div>
    </motion.div>
  );
} 

export default About;