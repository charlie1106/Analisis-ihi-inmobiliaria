import ServiciosInicio from "./ServicesInicio";
import QuieneSomos from "./QuienesSomos";
import classes from "../InicioSection/Inicio.module.css";
import inmobiliaria from "../Images/Inmobiliaria.png";
import casa from "../Images/Casa.jpeg";
import Image from "react-bootstrap/Image";
import Form from '../Contacto/Forms';
const InicioSection = () => {
  return (
    <div className={classes.contenido}>
      <div className={classes.contenedor}>
        <div>
          <img src={inmobiliaria}></img>
        </div>
        <div className={classes.textoimg}>
          <div className={classes.texto}>
            <label>Encuentra</label>
            <br></br>
            <label> tu inmueble</label>
            <br></br>
            <label>ideal</label>
          </div>
        </div>
      </div>
      <div className={classes.servicios}>
        <div className={classes.nuestros}>
          <label>Nuestros Servicios</label>
        </div>
        <div className={classes.info}>
          <label>¿Cómo podemos ayudarle?</label>
        </div>
        <ServiciosInicio />
      </div>
      <QuieneSomos />
      <div className={classes.casa}>
        <Image className={classes.imagen} src={casa} fluid />
      </div>
      <div className={classes.nuestros}>
        <label>Contacto</label>
      </div>
      <div className="container">
        <div class="row justify-content-md-center">

          <div class="col col-lg-5">
            <Form />
          </div>
        </div>

      </div>

    </div>
  );
};

export default InicioSection;
