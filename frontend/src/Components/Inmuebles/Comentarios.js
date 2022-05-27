import React, { useState, useEffect } from "react";
import Comentario from "./Comentario";
import classes from "./Inmueble.module.css";
import firebase from "../util/firebase";
import { getDatabase, ref, set, get, push, onValue } from "firebase/database";

const db = getDatabase();

const Comentarios = (props) => {
  return props.commentsA.map((p) => (
    <div>
      <Comentario name={p.inf.name} comentario={p.inf.comment} />
    </div>
  ));
};

export default Comentarios;

const createInmueble = (idImueble, name, comment) => {
  push(ref(db, "inmuebles/" + idImueble), {
    name: name,
    comment: comment,
  });
};

/*const starCountRef = ref(db, "inmuebles/");
  
  var readInmueble = (idImueble) => {
    get(ref(db, "inmuebles/" + idImueble))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) =>
            commmentsArray.push({
              id: key,
              inf: snapshot.val()[key],
            })
          );
          //console.log(commmentsArray);
          return commmentsArray;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  /*return this.state.inmuebles.map((p) => (
      <Inmueble
        operacion={this.state.operacion}
        name={p.name}
        precio={p.precio}
        imagen={p.imagen}
        id={p.id}
      />
    ));
  var comentario = readInmueble(1); //FALTA ID_INMUEBLE
  console.log(comentario);*/
