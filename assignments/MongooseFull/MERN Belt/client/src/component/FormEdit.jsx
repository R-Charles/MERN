import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const FormEdit = () => {

    const {id} = useParams()
    const [name, setName] = useState("")
    const navigate = useNavigate();

useEffect(()=>{
    axios.get(`http://localhost:8000/api/walls/${id}`)
        .then(response=>{
            console.log(response)
            if (response.data.results){
                const {name} = response.data.results
                setName(name);
            }
        })
        .catch(err=>console.log(err))
}, [id])


const submitHandler = (e)=>{
e.preventDefault();
const updateData = {name: name}
axios.put(`http://localhost:8000/api/walls/${id}`, updateData)
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
            <h2>Edit Wall</h2>
            <form onSubmit={submitHandler}>
                <FormControl variant="outlined" style={styles.input} >
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type="text"  name = "title" className='form-control' value={name} onChange = {(e)=>{setName(e.target.value)}}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" >
                    Update
                </Button>
            </form>
        </Paper>
    )
}
export default FormEdit;