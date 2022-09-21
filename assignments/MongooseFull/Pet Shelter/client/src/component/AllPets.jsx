import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const AllPets = () => {

    let [pets, setPets] = useState([])
    let [petDeleted, setPetDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(response=>{
                // console.log("respuesta", response);
                setPets(response.data.results);

            })
            .catch(err=>console.log(err))

    }, [petDeleted])

    const deletePet = (id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response=>{
                console.log(response)
                setPetDeleted(!petDeleted)
            })
            .catch(err=>console.log(err))
    }
        
    return (
        <div>
            <h3> All Pets below</h3>
            {
                pets.map((pet, i)=>{
                    return (
                        <div key = {pet._id} className='card mb-3'>
                            <h2><Link to= {`/pets/${pet._id}`}>{pet.name}</Link></h2>
                            <Link to={`/pets/edit/${pet._id}`} className='btn btn-warning mt-5'>Edit {pet.name}</Link>
                            <button onClick={()=>deletePet(pet._id)} className='btn btn-danger'>Delete {pet.name}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllPets;