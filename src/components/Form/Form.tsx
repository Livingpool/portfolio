import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import validator from "validator";
import 'react-toastify/dist/ReactToastify.css';
import "./form.css";

// react-toastify reference: https://deadsimplechat.com/blog/react-toastify-the-complete-guide/#custom-styling-the-notification-with-html-and-css

export function Form() {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_APP_FORMSPREE_ID as string
  );

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // verify if the email is valid
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  // formspree returns errors even if the email is sent successfully. idk why?
  const handleSubmitWithNotification = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {

      toast.success("Email successfully sent! 💥", {
        position: "top-center",
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        autoClose: 3000,
        toastId: "succeeded",
        transition: Bounce,
      });

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  };

  return (
    <div id="form" className="form">
      <h3>Get in touch by the form ✨✨</h3>
      <form onSubmit={handleSubmitWithNotification}>
        <label>
          Name
          <input
            required
            placeholder="Tim Liu"
            id="name"
            type="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input"
          />
          {name && <span className="checkmark">✓</span>}
        </label>

        <label>
          Email
          <input
            required
            placeholder="tim@gmail.com"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              verifyEmail(e.target.value);
            }}
            className="input"
          />
          {validEmail && <span className="checkmark">✓</span>}
        </label>

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label>
          Your Message
          <textarea
            required
            placeholder="Let me know how I can help you!"
            id="message"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="textarea"
            rows="5"
          />
        </label>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="recaptcha">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY as string}
            onChange={(_e) => {
              setIsHuman(true);
            }}
          ></ReCAPTCHA>
        </div>

        <button
          type="submit"
          className={`submit-btn ${
            state.submitting || !name || !validEmail || !message || !isHuman
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
          disabled={
            state.submitting || !name || !validEmail || !message || !isHuman
          }
        >
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
