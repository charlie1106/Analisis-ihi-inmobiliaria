import classes from '../InicioSection/ServicesInicio.module.css'
import star from '../Images/Estrella.png'
import Image from 'react-bootstrap/Image'

const ServiciosInicio = () => {
  const services = [
    {
      name: "Venta y arriendo",
      descr:
        "Encuentra aquí todo tipo de lugares acomodados a todo lo que necesitas y a los mejores precios.",
    },
    {
      name: "Administración",
      descr:
        "Proporcionamos servicio de administración para conjuntos residenciales y clubes",
    },
    {
      name: "Avalúos",
      descr:
        "Brindamos asesoría especializada para determinar el valor comercial de su bien",
    },
  ];
  return (
    <div className={classes.contenedor}>
      <div className={classes.contenedorcard}>
        <div className={classes.card}>
          <div className={classes.imagen}>
            <Image src={star} fluid />
          </div>
          <div>
            <div className={classes.titulocard}>
              <label>Venta y arriendo</label><br></br>
            </div>
            <div className={classes.textocard}>
              <label>Encuentra aquí toto tipo de lugares acomodados a todo lo que necesitas y a los mejores precios</label>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.imagen}>
            <Image src={star} fluid />
          </div>
          <div>
            <div className={classes.titulocard}>
              <label>Administración</label><br></br>
            </div>
            <div className={classes.textocard}>
              <label>Proporcionamos servicio de administración para conjuntos residenciales y clubes</label>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.imagen}>
            <Image src={star} fluid />
          </div>
          <div>
            <div className={classes.titulocard}>
              <label>Avalúos</label><br></br>
            </div>
            <div className={classes.textocard}>
              <label>Brindamos asesoría especializada para determinar el valor comercial de su bien</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosInicio;
