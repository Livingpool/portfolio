import emailIcon from "../../assets/icons/email-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg"
import { Form } from '../Form/Form';

export function Contact() {
  return (
    <div id="contact" className="mx-auto px-4 mt-20 flex flex-col justify-between">
      <div className='container mx-auto px-4'>
        <div className="head-text">
          <h1 className='mb-2 font text-yellow-700' style={{ fontSize: '40px' }}>
            Contact
          </h1>
        </div>

        <p className='font text-gray-500' style={{ fontSize: '16px' }}>Ready to get started on your ideas?</p>
        <p className='font text-gray-500' style={{ fontSize: '16px' }}>Send me a message here!</p>

        <div className="flex items-center mt-2 gap-4 justify-start">
          <button className='contact-btn hover:bg-yellow-500 hover:text-white' onClick={() => window.location.href="mailto:livingpoolofficial@gmail.com"} style={{ width: 'calc(25% - 0.5rem)' }}>
            <img src={emailIcon} alt="Email" className='w-8 h-8'/>
            <span className='text-sm'>livingpoolofficial@gmail.com</span>
          </button>
          <button className='contact-btn hover:bg-yellow-500 hover:text-white' onClick={() => window.location.href="tel:++886903299172"} style={{ width: 'calc(25% - 0.5rem)' }}>
            <img src={phoneIcon} alt="Phone No" className='w-8 h-8'/>
            <span className='text-sm'>(+886) 903299172</span>
          </button>  
        </div>

        <Form />
      </div>
    </div>
  );
} 

export default Contact;