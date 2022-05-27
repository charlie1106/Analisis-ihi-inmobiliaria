import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import InicioSection from "../InicioSection/Inicio";
import ServiciosSection from "../ServiciosSection/ServiciosSection";
import InfoSection from "../InfoSection/InfoSection";
import ContainerArriendoVenta from "../ArriendoVenta/ContainerArriendoVenta";
import VentaArriedoInmueble from "../Inmuebles/VentaArriedoInmueble";
import classes from "./Menu.module.css";
import DetalleInmueble from "../Inmuebles/DetalleInmueble";
import Footer from "../Footer";
import Contact from "../Contacto/Contact";
import Login from "../Log/Login";
import Logout from "../Log/Logout";
import SignUp from "../Log/SignUp";
const MenuMain = () => {
  return (
    <Router>
      <div className={classes.menu}>
        <h1>Inmobiliaria</h1>
        <hr />

        <div className={classes.secciones}>
          <Link to="/">Inicio</Link>

          <Link to="/services">Servicios</Link>

          <Link to="/info">¿Quiénes somos?</Link>

          <Link to="/contacto">Contacto</Link>
          {localStorage.getItem("id") ? (
            <Link to="/logout">Log out</Link>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <InicioSection />
        </Route>
        <Route exact path="/services">
          <ServiciosSection />
        </Route>
        <Route exact path="/info">
          <InfoSection />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/ventaArriendo">
          <ContainerArriendoVenta />
        </Route>
        <Route exact path="/ventaInmueble">
          <VentaArriedoInmueble operacion="inmueblesVenta" />
        </Route>
        <Route exact path="/arriendoInmueble">
          <VentaArriedoInmueble operacion="inmueblesArriendo" />
        </Route>
        <Route path="/detalleInmueble/:operacion/:id">
          <DetalleInmueble />
        </Route>
        <Route exact path="/administracion">
          <InfoSection />
        </Route>
        <Route exact path="/avaluos">
          <InfoSection />
        </Route>
        <Route exact path="/login">
          {localStorage.getItem("id") ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/logout">
          {localStorage.getItem("id") ? <Logout /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/signup">
          {localStorage.getItem("id") ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default MenuMain;
