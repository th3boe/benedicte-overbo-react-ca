import { useState } from "react";
import Button from "../../components/Button";
import "./contact.m.css";

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
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="full-name">Full name</label>
        <input
          className="form-input-size"
          name="full-name"
          value={fullName}
          placeholder="Enter your full name"
          onChange={handleInputChange}
          required
        />

        {formErrors.fullName && (
          <div className="error-message">{formErrors.fullName}</div>
        )}

        <label htmlFor="subject">Subject title</label>
        <input
          className="form-input-size"
          name="subject"
          value={subject}
          placeholder="Enter a subject title"
          onChange={handleInputChange}
          required
        />

        {formErrors.subject && (
          <div className="error-message">{formErrors.subject}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          className="form-input-size"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleInputChange}
          required
        />

        {formErrors.email && (
          <div className="error-message">{formErrors.email}</div>
        )}

        <label htmlFor="body">Description</label>
        <input
          className="form-input-size"
          name="body"
          value={body}
          placeholder="What are you thinking about?"
          onChange={handleInputChange}
          required
        />

        {formErrors.body && (
          <div className="error-message">{formErrors.body}</div>
        )}

        <Button name={"Submit"} />
      </form>
    </div>
  );
}
