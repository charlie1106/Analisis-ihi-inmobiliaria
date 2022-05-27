import classes from "./Quienes.module.css";

const QuieneSomos = () => {
  return (
    <div className={classes.contenedor}>
      <div className={classes.titulo}>
        <label>¿Quiénes somos?</label>
      </div>
      <div className={classes.texto1}>
        <label>Imagina las posibilidades</label>
      </div>
      <div className={classes.texto2}>
        <label>
        IHI Inmobiliaria es una empresa enfocada específicamente en la venta y arriendo de propiedades
         tanto en Bogotá como en la sabana de Bogotá respectivamente, esta empresa lleva 5 años 
         en el mercado y a pesar de no ser una gran organización ha logrado generar confianza en 
         los clientes con los que se ha trabajado.
        </label>
        <br></br>
        <br></br>
        <label>
          Si estas buscando una empresa de desarrollo inmobiliario que te ayude
          a convertir tus ideas en una realidad, considera a Inmobiliaria,
          tenemos los conocimientos, las habilidades y el deseo para ayudarte a
          triunfar.
        </label>
      </div>
    </div>
  );
};

export default QuieneSomos;
