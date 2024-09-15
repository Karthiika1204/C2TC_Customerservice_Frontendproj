import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Customer Management System</h1>
      <Link to="/manage-customers">
        <button className="manage-button">Manage Customer Details</button>
      </Link>
    </div>
  );
}

export default Home;
