import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const AllAuthors = () => {

    let [authors, setAuthors] = useState([])
    let [authorDeleted, setAuthorDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(response=>{
                // console.log("respuesta", response);
                setAuthors(response.data.results);

            })
            .catch(err=>console.log(err))

    }, [authorDeleted])

    const deleteAuthor = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
                console.log(response)
                setAuthorDeleted(!authorDeleted)
            })
            .catch(err=>console.log(err))
    }
        
    return (
        <div>
            <h3> All Authors below</h3>
            {
                authors.map((author, i)=>{
                    return (
                        <div key = {author._id} className='card mb-3'>
                            <h2><Link to= {`/authors/${author._id}`}>{author.name}</Link></h2>
                            <Link to={`/authors/edit/${author._id}`} className='btn btn-warning mt-5'>Edit {author.name}</Link>
                            <button onClick={()=>deleteAuthor(author._id)} className='btn btn-danger'>Delete {author.name}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllAuthors;