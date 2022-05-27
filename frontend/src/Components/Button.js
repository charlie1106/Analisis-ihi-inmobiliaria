import classes from './Button.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Boton = (p) => {
  return (
    <div>
      <Link to={p.link}>
        <button>{p.name}</button>{" "}
      </Link>
    </div>
  );
};

export default Boton;
