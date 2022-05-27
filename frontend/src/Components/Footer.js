import SocialN from "./SocialN";
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.contenido}>
        <SocialN />
        <br></br>
        <label>©2022 por Inmobiliaria</label>
      </div>
    </footer>
  );
};

export default Footer;
