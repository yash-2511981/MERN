// components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 bg-light">
      <div className="card text-center shadow-lg p-4" style={{ width: '30rem' }}>
        <div className="card-body">
          <h1 className="card-title text-dark mb-4">Welcome Back, User!</h1>
          <p className="card-text lead mb-4">
            We are happy to see you again! Explore your dashboard to manage your content and settings.
          </p>
          <button className="btn btn-dark btn-lg">Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
