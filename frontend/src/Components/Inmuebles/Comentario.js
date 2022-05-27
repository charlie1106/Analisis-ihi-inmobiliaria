import classes from "./Inmueble.module.css";

const comentario = (props) => {
  return (
    <div>
      <h5> {props.name}</h5>
      <p className={classes.comentarioInfo}>{props.comentario}</p>
      <hr />
    </div>
  );
};

export default comentario;
