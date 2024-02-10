import React from "react";
import contact from "../images/ContactUs.png";
const Form = () => {
  return (
    <section
      className="flex px-4 flex-col md:flex-row"
      style={styles.contactSection}
    >
      <div className="flex w-1/2">
        <img src={contact} width="100%" height="100%" padding="3rem" alt="" />
      </div>
      <div style={styles.contactContainer} className="w-1/2">
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.sectionSubtitle}>
          Have any question or query? Get in touch with us.
        </p>
        <form style={styles.contactForm}>
        <div className="flex gap-2" style={{ display: "flex", width: "100%" }}>
  <input
    type="text"
    placeholder="First Name"
    style={{ flex: 1, ...styles.inputField }}
    required
  />
  <input
    type="text"
    placeholder="Last Name"
    style={{ flex: 1, ...styles.inputField}}
    required
  />
</div>


          <input
            type="text"
            placeholder="Phone Number"
            style={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.inputField}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={styles.textareaField}
            required
          ></textarea>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  contactSection: {
    padding: "80px 0",
    background: "#f5f5f5",
    textAlign: "center",
    display: "flex",
  },
  contactContainer: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  sectionSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#555",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textareaField: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  submitButton: {
    padding: "10px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    color: "#fff",
    background: "#17A589",
    cursor: "pointer",
    transition: "background 0.3s ease",
    width: "100%",
  },
};

export default Form;
