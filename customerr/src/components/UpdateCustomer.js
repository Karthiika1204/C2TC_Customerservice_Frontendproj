import React, { useState } from 'react';
import axios from 'axios';g
import './UpdateCustomer.css';

function UpdateCustomer() {
  const [customer, setCustomer] = useState({
    customerId: '',
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
    axios.put(`http://localhost:8080/customer/${customer.customerId}`, customer)
      .then(response => {
        alert('Customer updated successfully');
      })
      .catch(error => {
        alert('Error updating customer');
      });
  };

  return (
    <div className="update-customer-container">
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerId"
          placeholder="Enter Customer ID"
          value={customer.customerId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={customer.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={customer.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={customer.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
}

export default UpdateCustomer;
