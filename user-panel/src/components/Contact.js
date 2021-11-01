import React, { useState, useRef } from "react";
import axios from "../utils/axios";

const Contact = ({ goTo }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const contact = useRef(null);

  if (goTo) {
    contact.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/contact/post", state)
      .then(() => {
        alert('Thanks for subscirbe')
      })
      .catch(() => {
        alert('Something is wrong')
      });
  };

  return (
    <div ref={contact} className="section container col-md-6 offset-md-3">
      <h2 className="section__title">Subscribe for Free Digital Magazines</h2>
      <p className="section__title__border"></p>
      <p className="section__title__details">
        Subscribe us so that we can give you update in your email
      </p>
      <form onSubmit={onSubmit} data-aos="fade-up">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            placeholder="Enter name"
          />
          <small className="form-text text-muted">
            Enter your original name
          </small>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              onChange={handleChange}
              placeholder="Enter number"
            />
            <small className="form-text text-muted">
              Enter your original number
            </small>
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="top-banner__button rainbow rainbow-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
