import "./ContactForm.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// const form = "potato";
// const sendEmail = "tomato";

function ContactForm() {
  // const form = useRef();
  const form = () => {
    console.log("useRef kommentert ut.");
  };

  const sendEmail = (e) => {
    console.log("Send mail fuknsjon slått av.");
    // e.preventDefault();

    // emailjs
    //   .sendForm("service_qjaxzrh", "template_7vhjcvp", form.current, {
    //     publicKey: "VBT2oThMHpYqoZnyS",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS! Message sent!");
    //       form.current.reset();
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };
  return (
    // Skal gå inni form: ref={form} onSubmit={sendEmail}
    <form className="form" id="kontakt">
      <label>Navn</label>
      <input className="input-field" type="text" name="user_name" />
      <label>Email*</label>
      <input className="input-field" type="email" name="user_email" />
      <label>Melding</label>
      <textarea id="message-field" className="input-field" name="message" />
      <input id="send-button" type="submit" value="Send" />
    </form>
  );
}

export default ContactForm;
