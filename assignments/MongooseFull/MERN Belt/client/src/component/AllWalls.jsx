import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
    } from "react-router-dom";

const AllWalls = () => {

    let [walls, setWalls] = useState([])
    let [wallDeleted, setWallDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/walls")
            .then(response=>{
                // console.log("respuesta", response);
                setWalls(response.data.results);

            })
            .catch(err=>console.log(err))

    }, [wallDeleted])

    const deleteWall = (id)=>{
        axios.delete(`http://localhost:8000/api/walls/${id}`)
            .then(response=>{
                console.log(response)
                setWallDeleted(!wallDeleted)
            })
            .catch(err=>console.log(err))
    }
        
    return (
        <div>
            <h3> All Walls below</h3>
            {
                walls.map((wall, i)=>{
                    return (
                        <div key = {wall._id} className='card mb-3'>
                            <h2><Link to= {`/walls/${wall._id}`}>{wall.name}</Link></h2>
                            <Link to={`/walls/edit/${wall._id}`} className='btn btn-warning mt-5'>Edit {wall.name}</Link>
                            <button onClick={()=>deleteWall(wall._id)} className='btn btn-danger'>Delete {wall.name}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllWalls;