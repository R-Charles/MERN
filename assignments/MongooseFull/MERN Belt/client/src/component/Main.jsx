import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import AllWalls from './AllWalls';




const Form = () => {
    let [wall, setwall] = useState([]);
    let [wallDeleted, setWallDeleted] = useState(false)

    const deleteWall = (id)=>{
        axios.delete(`http://localhost:8000/api/walls/${id}`)
            .then(response=>{
                console.log(response)
                setWallDeleted(!wallDeleted)
            })
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/walls`)
            .then(response=>{
                console.log(response)
                if (response.data.results){
                    setwall(response.data.results);
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
                        wall.map((wall, i)=> 
                    <tr key={i}>
                        <td>
                            {wall.name} 
                        </td>
                        <td>
                        <Link to={`/walls/edit/${wall._id}`} className='btn btn-warning mt-5 d-flex align-items-center'>Edit {wall.name}</Link>
                        <button onClick={()=>deleteWall(wall._id)} className='btn btn-danger ' >Delete {wall.name}</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};


export default Form;
