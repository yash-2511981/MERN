// components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-5">
              {/* Welcome Heading */}
              <h1 className="card-title text-dark mb-4">Welcome Back, User!</h1>

              {/* Welcome Message */}
              <p className="card-text lead mb-4">
                We are happy to see you again! Explore your dashboard to manage your content, settings, and more.
              </p>

              {/* Additional Info Section */}
              <div className="mb-4">
                <h4 className="text-primary">What can you do today?</h4>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle text-success me-2"></i> Manage your profile and account settings</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> View and edit your content</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Access notifications and messages</li>
                  <li><i className="bi bi-check-circle text-success me-2"></i> Explore new features and updates</li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-dark btn-lg">Go to Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
