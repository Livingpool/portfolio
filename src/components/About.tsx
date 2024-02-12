import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import reactIcon from '../assets/icons/react-icon.svg';
import jsIcon from '../assets/icons/js-icon.svg';
import tsIcon from '../assets/icons/typescript-icon.svg';
import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import golangIcon from '../assets/icons/golang-icon.svg';
import cIcon from '../assets/icons/c-icon.svg';
import cPlusPlusIcon from '../assets/icons/c++-icon.svg';
import tim from '../assets/images/tim-with-phone.jpeg';

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
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div id="about" className="container mx-auto px-4 mt-40 flex justify-between" ref={ref} animate={controls} initial='hidden'>
      <div className="head-text">
        <motion.h1 variants={fadeInLeft} className='mb-2 font text-yellow-700' style={{ fontSize: '40px' }}>
          About Me
        </motion.h1>
        <motion.p variants={fadeInLeft} transition={{ delay: 0.1 }} className='font' style={{ fontSize: '20px' }}>
          Welcome to my site! 
          I'm Tim, a fresh graduate from National Taiwan University. 
          I am driven by my passion for web development and I am always eager to learn new things.
        </motion.p>
        <motion.p variants={fadeInLeft} transition={{ delay: 0.2 }} className='mt-5 font' style={{ fontSize: '20px' }}>
          As I am just starting out, I am open to any opportunities! 
          If you have any ideas that you would like to collaborate on, I'd love to have a chat and see how I can help.
          Let's make your website dreams come true!
        </motion.p>
        <motion.p variants={fadeInLeft} transition={{ delay: 0.3 }} className='mt-5 font text-yellow-900' style={{ fontSize: '20px' }}>
          This is my main skill set:
        </motion.p>

        <motion.div className='flex flex-wrap gap-4'>
          <motion.div variants={fadeInUp} transition={{ delay: 0.10 }} className="hard-skills w-10">
            <img src={reactIcon} alt="React" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.11 }} className="hard-skills w-10">
            <img src={jsIcon} alt="JavaScript" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.12 }} className="hard-skills w-10">
            <img src={tsIcon} alt="TypeScript" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.13 }} className="hard-skills w-10">
            <img src={htmlIcon} alt="Html" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.14 }} className="hard-skills w-10">
            <img src={cssIcon} alt="CSS" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.15 }} className="hard-skills w-14">
            <img src={golangIcon} alt="Golang" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.16 }} className="hard-skills w-9">
            <img src={cIcon} alt="C" />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.17 }} className="hard-skills w-9">
            <img src={cPlusPlusIcon} alt="C++" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeInRight} transition={{ delay: 0.15 }} className='mt-20 ml-40 mr-5'>
        <img src={tim} alt="Tim" className="w-full h-auto transform -translate-y-16 scale-125" />
      </motion.div>
    </motion.div>
  );
} 

export default About;