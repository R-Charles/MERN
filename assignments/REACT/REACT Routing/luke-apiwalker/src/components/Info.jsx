import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router"

const Info = () => {

    const { category, id } = useParams(); //information from the route
    console.log("id is this", id);
    let [data, setData] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                console.log("response is this: ",response)
                setData(response.data)
            })
            .catch(err=>{
                console.log(err);
            })

    }, [category, id]) //makes it so app runs anytime the ID changes

    

    return (
        <div>
            {
                category === "people"?
                <>
                    <h1> {data.name}</h1>
                    <p>Height: {data.height}cm</p>
                    <p>Mass: {data.mass}kg</p>
                    <p>Hair Color: {data.hair_color}</p>
                    <p>Skin Color: {data.skin_color}</p>
                </> : category === "planets"?

                <>
                    <h1> {data.name}</h1>
                    <p>Diameter: {data.diameter}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Terrain: {data.terrain}</p>
                    <p>Population: {data.population}</p>
                </> : category === "films"?

                <>
                    <h1> {data.title}</h1>
                    <p>Director: {data.director}</p>
                    <p>Producer: {data.producer}</p>
                    <p>Release Date: {data.release_date}</p>
                </>: category === "species"?

                <>
                    <h1> {data.name}</h1>
                    <p>Average Height: {data.average_height}</p>
                    <p>Lifespan: {data.lifespan}</p>
                    <p>Classification: {data.classification}</p>
                    <p>Designation: {data.designation}</p>
                </>: category === "starships"?

                <>
                <h1> {data.name}</h1>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Crew: {data.crew}</p>
                    <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
                </>: category === "vehicles"?

                <>
                <h1> {data.name}</h1>
                    <p>Model: {data.model}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Class: {data.vehicle_class}</p>
                    <p>Speed: {data.max_atmosphering_speed}</p>
                </>: null
            }
        </div>
    );
};


export default Info;