import classes from "./Child.module.css";
import Button from "../Button";

function ContainerChild(props) {
  return (
    <div>
      <div className={classes.imagenDiv}>
        <img
          className={classes.image}
          src={props.imagen}
          alt="Mi titulo de la imagen"
        ></img>
      </div>
      <div className={classes.boton}>
        <Button name={props.name} link={props.link} />
      </div>
    </div>
  );
}
export default ContainerChild;
