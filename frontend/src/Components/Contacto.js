import classes from './Contacto.module.css'

const Contacto = () => {
    return(
        <div className={classes.contenido}>
            <div className={classes.titulo}>
                <label>Contacto</label>
            </div>
            <div className={classes.texto}>
                <label>Inmobiliaria</label><br></br>
                <label>Bogotá D.C.</label><br></br>
                <label>Colombia</label><br></br>
                <label>Tel: 321 215 1623</label><br></br>
                <label>info@inmobiliaria.com</label><br></br>
                <label>www.wixisstunning.com</label>
            </div>
        </div>
    );
};

export default Contacto;

