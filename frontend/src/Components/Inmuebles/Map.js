import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from "react-google-maps";


function Map (props){
    let { operacion } = useParams();
    let { id } = useParams();
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
    const result = await axios("http://localhost:3001/" + operacion + "/" + id);

    setData(result.data);
});
    return (
        <div>
            <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat:4.667712355028234, lng:-74.0535848}}
            />
        </div>
    )
}
                                    //defaultCenter={{lat: {data.latitud}, lng:{data.longitud}}}

//4.667712355028234, -74.0535848
export default withScriptjs(
    withGoogleMap(
        Map
    )
)