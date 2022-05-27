import classes from "./Inmueble.module.css";
import {Link } from "react-router-dom";

function Inmueble(props) {
  debugger;
  var ruta = "/detalleInmueble/" + props.operacion + "/" + props.id;
  return (
    <div>
      <div className={classes.imageDivUno}>
        <img
          className={classes.image}
          src={props.imagen}
          alt="Mi titulo de la imagen"
        ></img>
      </div>

      <div>
        <Link
          operacion={{ operacion: props.operacion }}
          id={{ id: props.id }}
          to={ruta}
        >
          <h3 className={classes.nameInmueble}>{props.name}</h3>
        </Link>
        <p>{props.precio}</p>
      </div>
    </div>
  );
}
export default Inmueble;
