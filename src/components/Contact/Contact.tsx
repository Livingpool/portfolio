import emailIcon from "../../assets/icons/email-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import { Form } from '../Form/Form';
import './contact.css';

export function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="head-text">
        <h1>
          Contact
        </h1>
      </div>

      <p>Ready to get started on your ideas?</p>
      <p>Send me a message here!</p>

      <div className='contact-btn-container'>
        <button className='contact-btn' onClick={() => window.location.href="mailto:livingpoolofficial@gmail.com"}>
          <img src={emailIcon} alt="Email"/>
          <span className='text-sm'>livingpoolofficial@gmail.com</span>
        </button>
        <button className='contact-btn' onClick={() => window.location.href="tel:++886903299172"}>
          <img src={phoneIcon} alt="Phone No"/>
          <span className='text-sm'>(+886) 903299172</span>
        </button>  
      </div>

      <Form />
    </div>
  );
} 

export default Contact;