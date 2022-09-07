import React, { useCallback, useState } from "react";
import axios from 'axios';

const AxiosPokemon = () => {

    let [pokemon, setPokemon] = useState([])

    const getData = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                console.log("got back response from api. Data is->", response);
                // explain setPokemon and the relation to response
                setPokemon(response.data.results)
            })
            .catch(err=>{
                console.log("something went wrong fetching", err )
            })

    }


    return(
        <div>
            <button onClick={getData}>Click me to fetch recent pokemon data</button>
            {
                pokemon.map((pokemon, idx)=>{
                    return(
                        <div key={idx}>
                            <h3>{pokemon.name}</h3>
                        </div>
                    )
                })
            }
        </div>
        
    )
}



export default AxiosPokemon;