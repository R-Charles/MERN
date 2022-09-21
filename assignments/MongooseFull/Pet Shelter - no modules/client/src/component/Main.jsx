import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import AllPets from './AllPets';




const Form = () => {
    let [pet, setpet] = useState([]);
    let [petDeleted, setPetDeleted] = useState(false)

    const deletePet = (id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response=>{
                console.log(response)
                setPetDeleted(!petDeleted)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets`)
            .then(response=>{
                console.log(response)
                if (response.data.results){
                    setpet(response.data.results);
                }
            })
            .catch(err=>console.log(err))
    }, [])



    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <Link to={'/pets/new'}>Add an pet</Link>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Actions Available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pet.map((pet, i)=> 
                    <tr key={i}>
                        <td>
                            {pet.name} 
                        </td>
                        <td>
                            {pet.type} 
                        </td>
                        <td>
                        <Link to={`/pets/${pet._id}/edit`} className='btn btn-warning mt-5 d-flex align-items-center'> Edit {pet.name}</Link>
                        <Link to={`/pets/${pet._id}`} className='btn btn-warning mt-5 d-flex align-items-center'> Details {pet.name}</Link>
        
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};


export default Form;
