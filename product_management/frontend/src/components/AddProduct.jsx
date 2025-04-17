import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2000/product/add",product).then(() => {
            navigate("/admin/products")
        }).catch((err) => {
            
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add New Product</h2>
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
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Add Product
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

export default AddProduct;
