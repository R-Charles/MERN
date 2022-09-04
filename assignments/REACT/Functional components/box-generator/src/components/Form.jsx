import React, {useState} from "react";


const Form = ()=>{

    let [boxColor, setBoxColor] = useState("");

    //array listOfColors to store all colors that are submitted MAY NOT NEED
    let [listOfColors, setListOfColors] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault(); //prevents the form submission from reloading
        console.log("form submitted!!!", boxColor);

        //put list of colors into an object.(MAY NOT NEED)
        let colorObj = {boxColor};
        console.log(colorObj);

        setListOfColors([...listOfColors, colorObj])
        //used to update the array(listOfColors) using its setter. is a copy which also 
        //adds whatever has just been submitted (15:28)
    }

    return(
        <>
            <h3>there should be a box</h3>
            <p>Lets create a few boxes!!!</p>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label> Box Color:</label>
                    <input onChange = {(e) => setBoxColor(e.target.value)} type="text" className="form-control" />
                </div>
                <input type="submit" value="add box" className="btn btn-success mt-3" />
            </form>
            <hr/>
            {
                listOfColors.map((q,idx)=>{
                    return(
                        <div>
                            <h3>{q.boxColor}</h3>
                        </div>
                    )
                })
            }
        </>    
    )

}


export default Form;