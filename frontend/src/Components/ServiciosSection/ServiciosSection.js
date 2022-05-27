import React from "react";
import classes from "./ServiciosSection.module.css";
import ServicesTarjetas from "./ServicesTarjetas";

function ServiciosSection() {
  return (
    <div className={classes.contenido}>
      <div className={classes.texto}>
        <h2>Servicios</h2>
        <p>¿Cómo podemos ayudarle?</p>
      </div>
      <ServicesTarjetas />
    </div>
  );
}

export default ServiciosSection;
