import React, {useState, useEffect} from 'react'; // react is an open source js library
import axios from 'axios'; // promise based http client
import {Link} from 'react-router-dom' //A promise is simply a placeholder for an asynchronous task which is yet to be completed.
import AllPets from './AllPets'; //can delete, serves no purpose


// API is how we get one piece of sofware to talk to another aka Application Programming Interface

const Form = () => { // file name doesnt matter since the import occurs in app.js
    let [pet, setpet] = useState([]); //useState holds onto to data, in this case a list/ pets or an array because of the '[]'
    let [petDeleted, setPetDeleted] = useState(false)

    const deletePet = (id)=>{
        axios.delete(`http://localhost:8000/api/pets/${id}`) //delete is the method
            .then(response=>{   //.then is what happens when our method is successful
                console.log(response)
                setPetDeleted(!petDeleted) //this is in reference to line 11
            })
            .catch(err=>console.log(err)) //.catch catches whatever we specify, in this case err. a response from an api an oject which you cannot map, but inside the object the result(an array) can be mapped
    }

    useEffect(()=>{ //???????????????????????????????????????????????????????????????????????????????????????
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
            <table className='table table-striped'>
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
                    {/* table row */}
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
                        <Link to={`/pets/${pet._id}/edit`} className='btn btn-warning mt-5 d-flex align-items-center m-50'> Edit {pet.name}</Link>
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
