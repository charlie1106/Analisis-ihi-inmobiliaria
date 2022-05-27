import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [email, pass] = e.target.elements;
    const res = await axios.get(
      "http://localhost:3001/users" +
        "?email=" +
        email.value +
        "&pass=" +
        pass.value
    );
    if (res.data.length > 0) {
      localStorage.setItem("id", email.value);
      window.location.replace("/");
    } else {
      window.alert("Email or passwords incorrect, try again");
    }
  };
  return (
    <>
      <div className={classes.fondo}>
        <div className={classes.divider}>
          <h2 className={classes.tituloL}>Login</h2>
          <form onSubmit={handleSubmit}>
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
              Log in
            </button>
          </form>
          <Link to="/signup" className={classes.linkT}>
            Sign Up now
          </Link>
        </div>
      </div>
    </>
  );
}
