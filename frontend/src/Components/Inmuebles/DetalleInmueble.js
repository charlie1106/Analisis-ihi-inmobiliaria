import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Inmueble.module.css";
import Comentarios from "./Comentarios";
import Map from "../Inmuebles/Map";
import { getDatabase, ref, set, get, push } from "firebase/database";

const db = getDatabase();

function DetalleInmueble() {
  let { operacion } = useParams();
  let { id } = useParams();
  const [data, setData] = useState({ hits: [] });
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    var commmentsArray = [];

    get(ref(db, operacion + "/" + id)).then((snapshot) => {
      if (snapshot.val() != null) {
        Object.keys(snapshot.val()).forEach((key) =>
          commmentsArray.push({
            id: key,
            inf: snapshot.val()[key],
          })
        );
      }

      setComments(commmentsArray);
    });
  }, [comment]);

  useEffect(async () => {
    const result = await axios("http://localhost:3001/" + operacion + "/" + id);

    setData(result.data);
  });

  const addComment = async() => {
    if (localStorage.getItem('id')) {
      if (comment != "") {
        const res =await axios.get('http://localhost:3001/users?'+'email='+localStorage.getItem('id'))
        newComment(res.data[0]['name']); //FALTA NOMBRE DE USER
      } else {
        alert("Llene el campo primero");
      }
    }else{
      window.location.replace('/login')
    }

  };

  const newComment = (name) => {
    push(ref(db, operacion + "/" + id), {
      name: name,
      comment: comment,
    });
    setComment("");
  };

  return (
    <div>
      <div className={classes.contenido}>
        <div className={classes.imageDiv}>
          <img
            className={classes.image}
            src={data.imagen}
            alt="Mi titulo de la imagen"
          ></img>
        </div>
        <div className={classes.texto}>
          <h2 className={classes.nombreService}>{data.name}</h2>
          <p>Área: {data.area}</p>
          <p>{data.descripcion}</p>
        </div>
      </div>
      <div className={classes.comentario}>
        <br />
        <h2>Comentarios</h2>
        <Comentarios commentsA={comments} />
        <input
          placeholder="Ingresa tu comentario"
          className={classes.inputComment}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></input>
        <button onClick={addComment}>Añadir comentario</button>
      </div>
      <div className={classes.mapa}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYPWtid2EszivVkAX0nugnAeRyElgaPAE"
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    </div>
  );
}
export default DetalleInmueble;
