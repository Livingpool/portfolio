import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import linkedin from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import mediumIcon from '../../assets/icons/medium.png';
import instagramIcon from '../../assets/icons/instagram.png';
import { Cat } from '../../models/CatApi/Cat';
import './home.css';

export function Home() {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 100, transition: { duration: 0.4, ease: "easeOut" } }, // start from a lower position and fully transparent, default transition is 0.8 seconds
    show: { opacity: 1, y: 0 }  // end at the original position and fully visible
  };

  return (
    <motion.div id="home" className="home" ref={ref} animate={controls} initial='hidden'>
      <div className="head-text" >
        <motion.h3 variants={fadeInUp} transition={{ duration: 0.8, ease: "easeOut" }}>
          Hi there! I'm
        </motion.h3>
        <motion.h1 variants={fadeInUp} transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}>
          Tim Liu.
        </motion.h1>
        <motion.h2 variants={fadeInUp} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
          I build things for the web.
        </motion.h2>
        <motion.p variants={fadeInUp} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}>
          Full Stack Developer.
        </motion.p>
        <motion.p variants={fadeInUp} transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}>
          1/2 Year of Experience.
        </motion.p>

        <motion.div variants={fadeInUp} transition={{ delay: 0.8, duration: 1, ease: "easeOut" }} className='home-btn-container'>
          <Link to="contact" className="home-btn" smooth={true}>Contact</Link>
        </motion.div>

        <motion.div variants={fadeInUp} transition={{ delay: 1.0, duration: 1, ease: "easeOut" }} className="social-media mt-2 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/tim-liu-taiwan/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Livingpool"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B903299172&text=Hello+Tim"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp"/>
          </a>
          <a
            href="https://www.instagram.com/mayisayno_tim_liu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://medium.com/@livingpoolofficial"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mediumIcon} alt="Medium" />
          </a>
        </motion.div>
      </div>

      <Cat />
    </motion.div>
  );
}

export default Home;