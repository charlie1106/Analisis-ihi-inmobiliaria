import React from "react";
import classes from "./InfoSection.module.css";
import escaleras from "../Images/Escaleras.jpeg";
import senior from "../Images/image.png";
import Image from "react-bootstrap/Image";
import Footer from "../Footer";
import Contacto from "../Contacto";

function InfoSection() {
  return (
    <div className={classes.contenido}>
      <div className={classes.inicio}>
        <Image src={escaleras} roundedCircle />
        <div className={classes.titulo}>
          <label>Todo sobre nosotros</label>
        </div>
        <div className={classes.texto}>
          <label>
          IHI Inmobiliaria es una empresa enfocada específicamente en la venta y arriendo de propiedades
         tanto en Bogotá como en la sabana de Bogotá respectivamente, esta empresa lleva 5 años 
         en el mercado y a pesar de no ser una gran organización ha logrado generar confianza en 
         los clientes con los que se ha trabajado.
          </label>
          <br></br><br></br>
          <label>
            Si estas buscando una empresa de desarrollo inmobiliario que te
            ayude a convertir tus ideas en una realidad, considera a
            Inmobiliaria, tenemos los conocimientos, las habilidades y el deseo
            para ayudarte a triunfar.
          </label>
          <br></br><br></br>
          <label>
          Misión: Proporcionar ayuda y asesoramiento guiado para tomar decisiones en pro del 
          beneficio de sus inmuebles y de los clientes, garantizando en todo momento la protección 
          del patrimonio de las partes, con transparencia y confiabilidad.
          </label>
          <br></br><br></br>
          <label>
          Visión: Trabajar con honradez y excelencia siempre de la mano de los clientes, basados 
          en la confianza y la seriedad, actuando con pasión, profesionalismo y sentido del trabajo 
          en equipo.
          </label>
        </div>
      </div>
      <div className={classes.medio}>
        <div className={classes.fundador}>
          <label>Fundador</label>
        </div>
        <div className={classes.contenedor}>
          <div>
            <Image src={senior} rounded />
          </div>
          <div>
            <div className={classes.textotit}>
              <label>Ingrid Hurtado</label>
            </div>
            <div className={classes.textocont}>
              <label>
                Esta es tu descripción del Miembro del equipo. Utiliza este
                espacio para describir brevemente el puesto y las
                responsabilidades de esta persona, o incluye una breve biografía
                suya. Es una gran oportunidad para resaltar la importancia de
                esta persona en el equipo.
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Contacto />
      </div>
    </div>
  );
}

export default InfoSection;
