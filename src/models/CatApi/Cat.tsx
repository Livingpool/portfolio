import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from '../../hooks/Typewriter';
import './cat.css';

export function Cat() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true); // start animations when fetch completes
  const controls = useAnimation();
  const typewriterKey = useRef(0);

  const [ref, inView] = useInView({
    threshold: 0.9
  });

  useEffect(() => {
    if (inView && !loading) { // check if not loading
      controls.start('show');
      typewriterKey.current += 1;
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, loading]); // add loading to dependency array

  const appear = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    const url = 'https://api.thecatapi.com/v1/images/search';

    setLoading(true); // Set loading to true when fetch starts

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data[0].url);
        setLoading(false); // Set loading to false when fetch completes
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false); // Set loading to false even if fetch fails
      });
  }, []);

  return (
    <motion.div className='cat-container' ref={ref} animate={controls} initial="hidden">
      <h5><Typewriter key={typewriterKey.current} text="Here's your cat of the day!" delay={80} infinite={false}/></h5>

      {imageUrl && <motion.img variants={appear} transition={{ delay: 0.6, duration: 0.2, ease: "easeOut" }} src={imageUrl} alt="Cat"/>}

      <motion.h6 variants={appear} transition={{ delay: 1.0, duration: 1, ease: "easeOut" }}>
        🔥Powered by TheCatAPI
      </motion.h6>
    </motion.div>
  );
};