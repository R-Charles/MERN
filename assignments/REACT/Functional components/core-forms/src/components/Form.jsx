import React, { useState } from "react";

const Form = () => {
    let[firstName, setfirstName]=useState("");
    let[lastName, setlastName]=useState("");
    let[email, setemail]=useState("");
    let[password, setpassword]=useState("");
    let[passwordConfirmation, setpasswordConfirmation] =useState("");
    
    function showError(){
        if(firstName.length == 0){
            return <p className="text-danger">Name is required!</p>
        }else if(firstName.length<3){
            return <p className="text-danger">Name must be at least 3 characters</p>
        }else{
            return null
        }
    }

    return(
        <div className="container">
            <h3>Fill in the form below </h3>
            <form>
                <div className="form-group">
                    <label>first name:</label>
                    <input onChange={(e)=> setfirstName(e.target.value)} type="text" className="form-control" />
                    {
                        firstName.length<2 && firstName.length>0 ? <p className="text-danger">Name must be at least 3 characters long</p> : null
                    }

                </div>
                <div className="form-group">
                    <label>last name</label>
                    <input onChange={(e)=> setlastName(e.target.value)} type="text" className="form-control" />
                    {
                        lastName.length<2 && lastName.length>0 ? <p className="text-danger">Last Name must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input onChange={(e)=> setemail(e.target.value)} type="text" className="form-control" />
                    {
                        email.length<2 && email.length>0 ? <p className="text-danger">email must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input onChange={(e)=> setpassword(e.target.value)} type="password" className="form-control" />
                    {
                        password.length<8 && password.length>0 ? <p className="text-danger">password must be at least 3 characters long</p> : null
                    }
                </div>
                <div className="form-group">
                    <label>password confirmation</label>
                    <input onChange={(e)=> setpasswordConfirmation(e.target.value)} type="password" className="form-control" />
                    {
                        passwordConfirmation !== password && passwordConfirmation.length>0 ? <p className="text-danger"> Your passwords do not match!</p>:''} 
                </div>
            </form>
        </div>
    )

}

export default Form;