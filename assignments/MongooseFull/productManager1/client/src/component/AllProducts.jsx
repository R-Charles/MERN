import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const AllProducts = () => {

    let [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(response=>{
                // console.log("respuesta", response);
                setProducts(response.data.results);

            })
            .catch(err=>console.log(err))

    }, [])
        
    return (
        <div>
            <h3> All Products below</h3>
            {
                products.map((product, i)=>{
                    return (
                        <div key = {product._id} className='card mb-3'>
                            <h2><Link to= {`/products/${product._id}`}>{product.title}</Link></h2>
                            <h3>{product.decription}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts;