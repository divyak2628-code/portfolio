import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
        Feel free to contact me anytime.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          rows="5"
          placeholder="Enter Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;