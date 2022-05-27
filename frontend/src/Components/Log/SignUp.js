import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [name, email, pass] = e.target.elements;
    console.log(name.value);
    const res = await axios.get(
      "http://localhost:3001/users" + "?email=" + email.value
    );
    if (res.data.length == 0) {
      await axios.post("http://localhost:3001/users", {
        name: name.value,
        email: email.value,
        pass: pass.value,
      });
      localStorage.setItem("id", email.value);
      window.location.replace("/");
    } else {
      window.alert("The email is already taken, choose another");
    }
  };
  return (
    <div className={classes.fondo}>
      <div className={classes.divider}>
        <h2 className={classes.tituloL}>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="pass"
              className="form-control"
              id="pass"
              placeholder="password"
            />
          </div>
          <button className={classes.btn} type="submit">
            Sign in
          </button>
        </form>
        <Link to="/login" className={classes.linkT}>
          Login in now
        </Link>
      </div>  

    </div>
  );
}
