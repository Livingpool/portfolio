import reactIcon from '../../assets/icons/react-icon.svg'
import linkedin from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import mediumIcon from '../../assets/icons/medium.png'
import instagramIcon from '../../assets/icons/instagram.png'

const Footer = () => {
  return (
    <div id='footer' className='footer mt-10'>
      <div className='flex items-center ml-16'>
        <p>
            This website was made with&nbsp;
        </p>
        <img src={reactIcon} className='w-8 spin-animation' alt="React" />
      </div>

      <div className="social-media mb-8 mr-16">
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
          <img src={whatsapp} alt="Whatsapp" style={{ width: '40px', height: '40px' }}/>
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
     
      </div>
    </div>
  )
}

export default Footer