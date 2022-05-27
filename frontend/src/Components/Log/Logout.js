import React from "react";

import { Link } from "react-router-dom";

import classes from "./Login.module.css";
export default function Logout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("id");
    window.location.replace("/");
  };
  const cancel = () => {};
  return (
    <div className={classes.fondo}>
      <div className={classes.divider}>
        <h2 className={classes.tituloL}>
          ¿Estás seguro de que quieres cerrar la sesión?
        </h2>
        <button className={classes.btn} onClick={handleSubmit}>
          Log out
        </button>
        <Link to="/" className={classes.linkT}>
          Cancel
        </Link>
      </div>
    </div>
  );
}
