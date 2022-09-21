import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
    Link
  } from "react-router-dom";


const OnePet = () => {


    const {id} = useParams()

    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response=>{
                console.log(response)
                if (response.data.results){
                    setDetails(response.data.results);
                }else{
                    setNotFound(true)
                }

            })
            .catch(err=>console.log(err))
    }, [id])
    
const deletePet = ()=>{
    axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch()
}


    return (
        <div>
            <Link to={`/`} className='btn btn-warning mt-5'>Home</Link>
            {
            notFound===true?
                console.log("Could not be found"):
            <>
                <h3> Details about: {details.name}</h3>
                <p>Pet type: {details.type}</p>
                <p>Description: {details.description}</p>
                <p>Skills: {details.skills1}</p>
                <button onClick={deletePet} className='btn btn-danger'>Adopt {details.name}</button>
            </>
            }
        </div>
    );
};


export default OnePet;