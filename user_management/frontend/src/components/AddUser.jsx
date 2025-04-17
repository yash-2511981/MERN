import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        position: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2000/user/add", user).then(() => {
            navigate("/admin/users")
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-primary">Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-5">
                                {/* Product Name Input */}
                                <div className="mb-4">
                                    <label htmlFor="productName" className="form-label fw-bold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="productName"
                                        name="name"
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter product name"
                                    />
                                </div>

                                {/* Product Email Input */}
                                <div className="mb-4">
                                    <label htmlFor="productEmail" className="form-label fw-bold">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="productEmail"
                                        name="email"
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter product email"
                                    />
                                </div>

                                {/* Product Position Input */}
                                <div className="mb-4">
                                    <label htmlFor="productPosition" className="form-label fw-bold">
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="productPosition"
                                        name="position"
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter product position"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-2 mt-4">
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

export default AddUser;
