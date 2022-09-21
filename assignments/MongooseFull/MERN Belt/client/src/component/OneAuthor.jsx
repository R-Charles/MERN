import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


const OneWall = () => {


    const {id} = useParams()

    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/walls/${id}`)
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
    
const deleteWall = ()=>{
    axios.delete(`http://localhost:8000/api/walls/${id}`)
        .then(response=>{
            console.log(response)
            navigate("/")
        })
        .catch()
}


    return (
        <div>
            {
            notFound===true?
                console.log("Could not be found"):
            <>
                <h3> {details.name}</h3>
                <button onClick={deleteWall} className='btn btn-danger'>Delete {details.name}</button>
            </>
            }
        </div>
    );
};


export default OneWall;