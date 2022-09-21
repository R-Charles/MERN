import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {
    Link
  } from "react-router-dom";
// import AllProducts from './AllProducts';



const Create = () => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e, type)=>{
            setFormInfo({
                ...formInfo,
                [e.target.name] : e.target.value
            })
        }
        

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(response=>{
                console.log("respuesta despues de enviar", response)
                if(response.data.errors){
                }else{
                    navigate("/")   
                }
            })
            .catch(err=> {
                console.log(err.response.data.err.errors)
                setFormErrors(err.response.data.err.errors);
            })

    }


    return (
        <div>
            <div>
                <h2>Know a pet in need of a home?</h2>
                <Link to={`/`} className='btn btn-warning mt-5'>Home</Link>
            </div>
            
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Pet Name:</label>
                    <input type="text" name = "name" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type:</label>
                    <input type="text" name = "type" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Description:</label>
                    <input type="text" name = "description" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div>
                    <h3> Skills Optional</h3>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skills1:</label>
                    <input type="text" name = "skills1" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.skills1?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skills2:</label>
                    <input type="text" name = "skills2" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.skills2?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skills3:</label>
                    <input type="text" name = "skills3" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.skills3?.message}</p>
                    <input type="submit" value="Add Pet" className="btn btn-info m-4" />
                </div>
            </form>
        </div>
    );
};


export default Create;
