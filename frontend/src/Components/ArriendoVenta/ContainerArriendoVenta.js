import ContainerChild from "./ContainerChild";
import classes from "./Padre.module.css";

function ContainerPadre() {
  return (
    <div className={classes.contenido}>
      <ContainerChild
        imagen="https://static.wixstatic.com/media/3acb76_094f79b345be425db65049ab752f2b0a~mv2.jpg/v1/fill/w_368,h_316,al_c,q_80,usm_0.66_1.00_0.01/wow_edited.webp"
        name="Venta"
        link="ventaInmueble"
      />
      <ContainerChild
        imagen="https://static.wixstatic.com/media/3acb76_b3ae1b1a7c434d5182579d474ddd0032~mv2.png/v1/fill/w_368,h_316,al_c,q_85,usm_0.66_1.00_0.01/Arriendo%20final.webp"
        name="Arriendo"
        link="arriendoInmueble"
      />
    </div>
  );
}

export default ContainerPadre;
