// components/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Assuming you're using axios to fetch data
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const fetchProducts = async () => {
        await axios.get('http://localhost:2000/product/getProduct').then((result) => {
            setProducts(result.data);
        }).catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (productId) => {
        axios.delete(`http://localhost:2000/product/delete/${productId}`).then(() => {
            fetchProducts();
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleEdit = (productId) => {
        navigate(`edit/${productId}`)
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Products</h2>
                <button className="btn btn-success" onClick={() => navigate("add")}>
                    Add New Product
                </button>
            </div>

            <table className="table table-striped my-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center">No products available.</td>
                        </tr>
                    ) 
                    :
                    (
                        products.map((product, index) => (
                            <tr key={product._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEdit(product._id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
