import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const AllProducts = () => {

    let [products, setProducts] = useState([])
    let [productDeleted, setProductDeleted] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(response=>{
                // console.log("respuesta", response);
                setProducts(response.data.results);

            })
            .catch(err=>console.log(err))

    }, [productDeleted])

    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response)
                setProductDeleted(!productDeleted)
            })
            .catch(err=>console.log(err))
    }
        
    return (
        <div>
            <h3> All Products below</h3>
            {
                products.map((product, i)=>{
                    return (
                        <div key = {product._id} className='card mb-3'>
                            <h2><Link to= {`/products/${product._id}`}>{product.title}</Link></h2>
                            <h3>{product.description}</h3>
                            <Link to={`/products/edit/${product._id}`} className='btn btn-warning mt-5'>Edit {product.name}</Link>
                            <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'>Delete {product.title}</button>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts;