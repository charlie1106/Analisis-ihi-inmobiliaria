import Inmuebles from "./Inmuebles";
import classes from "./Inmueble.module.css";

function VentaArriedoInmueble(props) {
  return (
    <div>
      <div className={classes.contenido}>
        <Inmuebles operacion={props.operacion} />
      </div>
    </div>
  );
}

export default VentaArriedoInmueble;
