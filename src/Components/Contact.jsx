import React from "react";
import { ContactForm } from "../styles";

const Contact = () => {
  return (
    <ContactForm action="action_page.php">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name.." />

      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your Email.." />

      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="What would you like to discuss.."
      ></textarea>

      <input type="submit" value="Submit" />
    </ContactForm>
  );
};

export default Contact;
