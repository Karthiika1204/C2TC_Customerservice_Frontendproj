import React, { useState } from 'react';
import axios from 'axios';
import './AddCustomer.css';

function AddCustomer() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/customer', customer)
      .then(response => {
        alert('Customer added successfully');
      })
      .catch(error => {
        alert('Error adding customer');
      });
  };

  return (
    <div className="add-customer-container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default AddCustomer;
