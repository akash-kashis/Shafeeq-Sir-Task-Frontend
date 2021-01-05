import React, { useEffect,useState } from "react";
import Headers from '../Header/Headers'
import ReactMapGL, {Marker} from 'react-map-gl'
import axios from 'axios'
import lImage from '../../icons/locationTag.png'

function Map(props) {
    const[userData,setuserData]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:5000/getsUserslocations',{withCredentials: true})
          .then(res => {
             setuserData(res.data)
            })
           .catch(err=>{
             console.log(err)
           }) 
      },[])

    const [view,setView]=useState({
        width: "100vw",
        height: "100vh",
        latitude: 10.5276,
        longitude: 76.2144,
        zoom: 10
    })
    return (
        <div>
            <Headers/>
                <ReactMapGL {...view} mapboxApiAccessToken="pk.eyJ1IjoiZ29sYXVuZHJ5IiwiYSI6ImNramg5MGZ6dDB6YXUydW52aWN3amhnejQifQ.Gk03av5Y2e_29fqEBaoihQ" 
                onViewportChange={view => {setView(view)}}>
                    {userData.map(user => 
                        <Marker key={user._id} latitude={user.geometry.coordinates[0]} longitude={user.geometry.coordinates[1]} >
                            <img src={lImage} style={{height:60,width:60}}/>
                        </Marker>
                        )}
                </ReactMapGL>
        </div>
    );
}

export default Map;
