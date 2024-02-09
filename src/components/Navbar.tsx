import { SetStateAction, useState } from 'react';
import { Link } from 'react-scroll';
import TimLiu from '../assets/images/TimLiu.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div className='navbar'>
        <Link to='home' className='self-end ml-10' onClick={() => handleClick('home')} spy={true} smooth={true} offset={-70} duration={500}>
            <img src={TimLiu} alt="Tim Liu" className="w-12 icon-hover"/>
        </Link>

        <nav className='flex text-lg gap-7 font-medium'>
            <Link to='home' className={`link ${activeLink === 'home' ? 'text-yellow-900' : 'text-black'}`} onClick={() => handleClick('home')} spy={true} smooth={true} offset={-70} duration={500}>
                Home
            </Link>
            <Link to='about' className={`link ${activeLink === 'about' ? 'text-yellow-900' : 'text-black'}`} onClick={() => handleClick('about')} spy={true} smooth={true} offset={-70} duration={500}>
                About Me
            </Link>
            <Link to='projects' className={`link ${activeLink === 'projects' ? 'text-yellow-900' : 'text-black'}`} onClick={() => handleClick('projects')} spy={true} smooth={true} offset={-70} duration={500}>
                Projects
            </Link>
            <Link to='contact' className={`link ${activeLink === 'contact' ? 'text-yellow-900' : 'text-black'}`} onClick={() => handleClick('contact')} spy={true} smooth={true} offset={-70} duration={500}>
                Contact
            </Link>
        </nav>
    </div>
  );
};

export default Navbar;