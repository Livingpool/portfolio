import { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import TimLiu from '../../assets/images/TimLiu.png';
import './navbar.css';

const Navbar = () => {
  const [_, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  // disable scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <div id='navbar' className={ isMenuOpen ? 'navbar active' : 'navbar' }>
      <Link to='home' className={ isMenuOpen ? 'icon closed' : 'icon' } onClick={() => handleClick('home')} spy={true} smooth={true} offset={-70} duration={500}>
        <img src={TimLiu} alt="Tim Liu" className="w-8 xs:w-10 icon-hover mr-4"/>
        <h1 className='emilys-candy-regular'>Tim Liu | Portfolio</h1>
      </Link>

      <div className="navlist">
        <nav>
          <Link to='home' className='link' onClick={() => handleClick('home')} spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
          <Link to='about' className='link' onClick={() => handleClick('about')} spy={true} smooth={true} offset={-70} duration={500}>
            About Me
          </Link>
          <Link to='projects' className='link' onClick={() => handleClick('projects')} spy={true} smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
          <Link to='contact' className='link' onClick={() => handleClick('contact')} spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
        </nav>
      </div>

      <button
        aria-expanded={ isMenuOpen ? 'true' : 'false' }
        aria-haspopup="true"
        aria-label={ isMenuOpen ? 'menu open' : 'menu closed' }
        className={ isMenuOpen ? 'menu open' : 'menu' }
        onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default Navbar;