import React, { useCallback, useState } from "react";


const FetchPokemon = () => {

    let [pokemon, setPokemon] = useState([])

    const getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => {
                return response.json()
            })
            .then(response=> {
                console.log("response from api is ->", response)
                setPokemon( response)

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



export default ;