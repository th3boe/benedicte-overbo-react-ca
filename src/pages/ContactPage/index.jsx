import { Helmet } from "react-helmet";
import { useState } from "react";
import Button from "../../components/Button";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "full-name") {
      setFullName(value);
    }
    if (event.target.name === "subject") {
      setSubject(value);
    }
    if (event.target.name === "email") {
      setEmail(value);
    }
    if (event.target.name === "body") {
      setBody(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const customerForm = { fullName, subject, email, body };

    const formValidate = {
      fullName:
        fullName.length < 3
          ? "Full name is required to be at least 3 characters"
          : "",
      subject:
        subject.length < 3
          ? "Your subject title is required to be at least 3 characters"
          : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? "Invalid email address"
        : "",
      body:
        body.length < 3
          ? "The description is required to be at least 3 characters"
          : "",
    };

    if (Object.values(formValidate).some((error) => error !== "")) {
      setFormErrors(formValidate);
    } else {
      alert(
        "We thank you for contacting us, your submission will be looked at by someone from customerservice."
      );

      console.log(customerForm);
      setFormErrors({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>E-com | Contact</title>
      </Helmet>
      ;<h1 className={styles.title}>Contact Us!</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label htmlFor="full-name">Full name</label>
        <input
          className={styles.inputSize}
          id="full-name"
          name="full-name"
          value={fullName}
          placeholder="Enter your full name"
          onChange={handleInputChange}
          required
        />

        {formErrors.fullName && (
          <div className={styles.errorMessage}>{formErrors.fullName}</div>
        )}

        <label htmlFor="subject">Subject title</label>
        <input
          className={styles.inputSize}
          id="subject"
          name="subject"
          value={subject}
          placeholder="Enter a subject title"
          onChange={handleInputChange}
          required
        />

        {formErrors.subject && (
          <div className={styles.errorMessage}>{formErrors.subject}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          className={styles.inputSize}
          id="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleInputChange}
          required
        />

        {formErrors.email && (
          <div className={styles.errorMessage}>{formErrors.email}</div>
        )}

        <label htmlFor="body">Description</label>
        <input
          className={styles.inputSize}
          id="body"
          name="body"
          value={body}
          placeholder="What are you thinking about?"
          onChange={handleInputChange}
          required
        />

        {formErrors.body && (
          <div className={styles.errorMessage}>{formErrors.body}</div>
        )}

        <Button name={"Submit"} />
      </form>
    </div>
  );
}
