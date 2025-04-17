import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
    });
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:2000/product/fetchone/${id}`).then((result) => {
            setProduct(result.data)
        }).catch((err) => {
            
        });
    },[])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct(() => ({
            ...product,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:2000/product/update/${id}`,product).then((res) => {
            navigate("/admin/products")
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6 mx-auto">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        name="name"
                                        value={product.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter product name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="productPrice" className="form-label">
                                        Product Price (Rs)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="productPrice"
                                        name="price"
                                        value={product.price}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter product price"
                                    />
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn btn-success btn-lg">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
