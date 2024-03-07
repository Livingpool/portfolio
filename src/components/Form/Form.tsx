import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORMSPREE_ID as string)

  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // verify if the email is valid
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })

  // if the form is successfully submitted, show a success message
  if (state.succeeded) {
    return (
      <div>
        <h3>Thank you for your message! 😃</h3>
        <button
        onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        >
        Back to the top
        </button>
        <ToastContainer />
      </div>
    )
  }

  return (
    <div id='form' className='flex flex-col'>
      <h1 className='mt-4 mb-2 font' style={{ fontSize: '20px' }}>Get in touch by the form ✨✨</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center w-full md:w-1/3 lg:w-1/2'>
        <label className='text-black font-semibold mb-4 relative'>
          Name
          <input
            required
            placeholder="Tim Liu"
            id="name"
            type="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
            className='input'
          />
          {name && <span className="absolute right-0 top-0 mt-1 mr-2 text-green-500">✓</span>}
        </label>

        <label className='text-black font-semibold mb-4 relative'>
          Email
          <input
            required
            placeholder="tim@gmail.com"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              verifyEmail(e.target.value)
            }}
            className='input'
          />
          {validEmail && <span className="absolute right-0 top-0 mt-1 mr-2 text-green-500">✓</span>}
        </label>

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label className='text-black font-semibold mb-4 relative'>
          Your Message
          <textarea
            required
            placeholder="Let me know how I can help you!"
            id="message"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            className='textarea'
            rows='5'
          />
        </label>

        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY as string}
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>

        <button 
          type="submit" 
          className={`submit-btn ${state.submitting || !name || !validEmail || !message || !isHuman ? 'cursor-not-allowed' : 'cursor-pointer'}`} 
          disabled={state.submitting || !name || !validEmail || !message || !isHuman}
        >          
          Send Message
        </button>

      </form>
      <ToastContainer />
    </div>
  )
}