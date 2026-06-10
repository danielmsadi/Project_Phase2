import React from "react";
import { useState } from "react";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      contactData.name === "" ||
      contactData.email === "" ||
      contactData.message === ""
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!contactData.email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Your message has been sent successfully.");

    setContactData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="main-box">
      <div className="wrap">
        <section className="title-box">
          <h2>Contact Us</h2>
        </section>

        <section className="content-box">
          <p>
            Students can contact Lebanese International University for questions
            about programs, admission, and university services.
          </p>
          <p>
            <strong>Email:</strong> info@liu.edu.lb
          </p>
          <p>
            <strong>Phone:</strong> +961 1 706 881
          </p>
        </section>

        <section className="form-box">
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label>Message</label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="5"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {message && <p className="message">{message}</p>}
        </section>
      </div>
    </main>
  );
}

export default Contact;