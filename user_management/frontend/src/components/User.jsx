// components/User.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Assuming you're using axios to fetch data
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [users, setUser] = useState([]);
    const navigate = useNavigate()

    const fetchUsers = async () => {
        await axios.get('http://localhost:2000/user/all-users').then((result) => {
            setUser(result.data);
        }).catch((err) => {
            console.log(err)
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:2000/user/delete/${userId}`).then(() => {
            fetchUsers();
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleEdit = (userId) => {
        navigate(`edit/${userId}`)
    };

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center my-4">
                <h2 className="text-primary">User Management</h2>
                <button
                    className="btn btn-success px-4 py-2"
                    onClick={() => navigate("add")}
                >
                    <strong>Add New User</strong>
                </button>
            </div>

            {/* Table Section */}
            <div className="table-responsive">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <table className="table table-striped table-bordered table-hover">
                            <thead className="table-dark text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted">
                                            No users available.
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user, index) => (
                                        <tr key={user._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.position}</td>
                                            <td>
                                                {/* Action Buttons */}
                                                <button
                                                    className="btn btn-warning btn-sm me-2"
                                                    onClick={() => handleEdit(user._id)}
                                                    title="Edit"
                                                >
                                                    <i className="bi bi-pencil"></i> Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(user._id)}
                                                    title="Delete"
                                                >
                                                    <i className="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
