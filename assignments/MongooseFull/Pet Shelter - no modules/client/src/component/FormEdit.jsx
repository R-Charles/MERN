import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const FormEdit = () => {

    const {id} = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response=>{
                console.log(response)
                if (response.data.results){
                    setDetails(response.data.results);
                }
            })
            .catch(err=>console.log(err))
    }, [id])

    const changeHandler = (e)=> {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }


const submitHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pets/${id}`, details)
        .then(response=>{
            console.log("respuesta despues de enviar", response)
            navigate("/")
        })
        .catch(err=> console.log(err))
}




const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Edit Pet</h2>
            <Link to={`/`} className='btn btn-warning mt-5'>Home</Link>
            <form onSubmit={submitHandler}>
                <FormControl variant="outlined" style={styles.input} >
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text"  name = "name" className='form-control' value={details.name} onChange = {changeHandler}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input} >
                    <InputLabel>Pet type</InputLabel>
                    <OutlinedInput type="text"  name = "type" className='form-control' value={details.type} onChange = {changeHandler}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input} >
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text"  name = "description" className='form-control' value={details.description} onChange = {changeHandler}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input} >
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text"  name = "skills1" className='form-control' value={details.skills1} onChange = {changeHandler}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" >
                    Update
                </Button>
            </form>
        </Paper>
    )
}



export default FormEdit;