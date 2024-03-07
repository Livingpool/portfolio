import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import linkedin from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import mediumIcon from '../../assets/icons/medium.png'
import instagramIcon from '../../assets/icons/instagram.png'
import './home.css';

export function Home() {
  const controls = useAnimation();
  const mountainControls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.7
  });

  const [mountainRef, mountainInView] = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (mountainInView) {
      mountainControls.start('show');
    } else {
      mountainControls.start('hidden');
    }
  }, [mountainControls, mountainInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 100, transition: { duration: 0.4 } }, // start from a lower position and fully transparent, default transition is 0.8 seconds
    show: { opacity: 1, y: 0 }  // end at the original position and fully visible
  };

  const appear = {
    hidden: { opacity: 0, transition: { duration: 0.4 } },
    show: { opacity: 0.8 },
    exit: { opacity: 0, rotate: 180, scale: 0, transition: { duration: 0.5 } }
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

        <motion.div variants={fadeInUp} transition={{ delay: 1.0, duration: 1, ease: "easeOut" }} className="social-media ml-2">
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
            <img src={whatsapp} alt="Whatsapp" style={{ width: '40px', height: '40px' }} />
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

      <motion.div className='relative top-0' ref={mountainRef} animate={mountainControls} initial='hidden' exit='exit'>
        <svg viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '600px' }}>
          <g id="mountains">
            <motion.path id="mountain5" opacity="0.8" d="M1334.49 875L1432 1024H981L1334.49 875Z" fill="#115C33" variants={appear} transition={{ delay: 2.2 }} />
            <motion.path id="mountain4" opacity="0.8" d="M981.297 904L1224 1024H775L981.297 904Z" fill="#26804F" variants={appear} transition={{ delay: 2.0 }} />
            <motion.path id="mountain3" opacity="0.8" d="M798.919 904L933 1024H482L798.919 904Z" fill="#3BB071" variants={appear} transition={{ delay: 1.8 }} />
            <motion.path id="mountain2" opacity="0.8" d="M372.622 875L676 1024H227L372.622 875Z" fill="#1BB763" variants={appear} transition={{ delay: 1.6 }} />
            <motion.path id="mountain1" opacity="0.8" d="M106.783 840L458 1024H7L106.783 840Z" fill="#268E55" variants={appear} transition={{ delay: 1.4 }} />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default Home;