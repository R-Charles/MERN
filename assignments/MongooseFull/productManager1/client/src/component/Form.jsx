import React, {useState} from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import AllProducts from './AllProducts';


const Form = () => {
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
        axios.post("http://localhost:8000/api/products", formInfo)
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
            <h3> Submit this form to create a product</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name = "title" className='form-control' onChange={changeHandler} />
                    {/* {formErrors.name? formErrors.title.message: null} */}
                    <p className="text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name = "price" className='form-control' onChange={changeHandler} />
                    <p className="text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name = "description" className='form-control' onChange={changeHandler} />
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Create" className="btn btn-success m-4" onChange={changeHandler} />
            </form>
        </div>
    );
};


export default Form;
