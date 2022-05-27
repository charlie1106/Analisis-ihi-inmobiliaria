import Inmueble from "./Inmueble";
import React, { Component } from "react";

class Inmuebles extends Component {
  constructor(props) {
    super();
    this.state = {
      inmuebles: [],
      operacion: props.operacion,
    };
  }

  getData = () => {
    var operacion = "http://localhost:3001/" + this.state.operacion;
    fetch(operacion)
      .then((response) => response.json())
      .then((data) => this.addData(data));
  };

  componentDidMount = () => {
    this.getData();
  };

  addData = (data) => {
    this.setState({ inmuebles: data });
    console.log(this.state.inmuebles);
  };
  render() {
    return this.state.inmuebles.map((p) => (
      <Inmueble
        operacion={this.state.operacion}
        name={p.name}
        precio={p.precio}
        imagen={p.imagen}
        id={p.id}
      />
    ));
  }
}

export default Inmuebles;
