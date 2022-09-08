import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {

    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();

    //when the form is submitted do something. something === redirect
    const getData = (e) => {
        e.preventDefault();
        // navigate("/"+category + "/"+id);
        navigate(`/${category}/${id}/`);
    }

    //when the route is localhost:3000/someCategory/someId
    
    return (
        <div>
            <form onSubmit={getData} className='d-flex align-items-center justify-content-center gap-3 '>
                <div className="form-group">
                    <label> Search for:</label>
                    <select onChange={(e)=>setCategory(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                        <option value="starships">starships</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>ID</label>
                    <input onChange={(e)=>setId(e.target.value)} type="number" name="" id="" />
                </div>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    );
};



export default Form;