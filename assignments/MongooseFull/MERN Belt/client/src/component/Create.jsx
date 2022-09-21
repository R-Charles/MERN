import React, {useState} from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import AllProducts from './AllProducts';


const Create = () => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    // const navigate = useNavigate();

    const changeHandler = (e, type)=>{
            setFormInfo({
                ...formInfo,
                [e.target.name] : e.target.value
            })
        }
        

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/walls", {formInfo})
            .then(response=>{
                console.log("respuesta despues de enviar", response)
                if(response.data.errors){
                    setFormErrors(response.data.errors);
                }else{
                    
                }
            })
            .catch(err=> console.log(err))
    }


    return (
        <div>
            <h3> Add Wall</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name = "Name" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.name?.message}</p>
                    <input type="submit" value="Submit" className="btn btn-info m-4" />
                </div>
            </form>
        </div>
    );
};


export default Create;
