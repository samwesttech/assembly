import React from "react";
import { ContactForm } from "../styles";

const Contact = () => {
  return (
    <ContactForm action="action_page.php" id="Contact">
      <h1>Contact Us</h1>
      <div className="input-field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name.." />
      </div>
      <div className="input-field">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your Email.." />
      </div>
      <div className="input-field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="What would you like to discuss.."
        ></textarea>
      </div>

      <input type="submit" value="Submit" />
    </ContactForm>
  );
};

export default Contact;
