import Button from "../Button";
import classes from "./TarjetaService.module.css";
function TarjetaService(props) {
  return (
    <div className={classes.contenido}>
      <div className={classes.descripcion}>
        <h3>{props.nameService}</h3>
        <p>{props.descripcion}</p>
        <Button name="Ver más" link={props.link} />
      </div>
      <div className={classes.imagenDiv}>
        {" "}
        <img
          className={classes.image}
          src={props.imagen}
          alt="Mi titulo de la imagen"
        ></img>
      </div>
    </div>
  );
}

export default TarjetaService;
