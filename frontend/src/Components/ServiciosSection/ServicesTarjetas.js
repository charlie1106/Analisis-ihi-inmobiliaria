import TarjetaService from "./Tarjeta";
import React, { Component } from "react";

class ServiciosSection extends Component {
  constructor(props) {
    super();
    this.state = {
      servicios: [],
    };
  }

  getData = () => {
    fetch("http://localhost:3001/services")
      .then((response) => response.json())
      .then((data) => this.addData(data));
  };

  componentDidMount = () => {
    this.getData();
  };

  addData = (data) => {
    this.setState({ servicios: data });
    console.log(this.state.servicios);
  };
  render() {
    return this.state.servicios.map((p) => (
      <div>
        <TarjetaService
          nameService={p.name}
          descripcion={p.descripcion}
          imagen={p.imagen}
          link={p.link}
        />
      </div>
    ));
  }
}

export default ServiciosSection;
