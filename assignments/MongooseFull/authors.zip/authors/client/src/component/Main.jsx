import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import AllAuthors from './AllAuthors';




const Form = () => {
    let [author, setauthor] = useState([]);
    let [authorDeleted, setAuthorDeleted] = useState(false)

    const deleteAuthor = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
                console.log(response)
                setAuthorDeleted(!authorDeleted)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(response=>{
                console.log(response)
                if (response.data.results){
                    setauthor(response.data.results);
                }
            })
            .catch(err=>console.log(err))
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Actions Available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author.map((author, i)=> 
                    <tr key={i}>
                        <td>
                            {author.name} 
                        </td>
                        <td>
                        <Link to={`/authors/edit/${author._id}`} className='btn btn-warning mt-5 d-flex align-items-center'>Edit {author.name}</Link>
                        <button onClick={()=>deleteAuthor(author._id)} className='btn btn-danger ' >Delete {author.name}</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};


export default Form;
