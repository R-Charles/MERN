import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";


const OneProduct = () => {


    const {id} = useParams()

    const [details, setDetails] = useState({})
    const [notFound, setNotFound] = useState(false)


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
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
    

    return (
        <div>
            {
            notFound===true?
                console.log("Could not be found"):
            <>
                <h3> {details.title}</h3>
                <p>Price: {details.price}</p>
                <p>Description: {details.description}</p>
            </> 
            }
        </div>
    );
};


export default OneProduct;