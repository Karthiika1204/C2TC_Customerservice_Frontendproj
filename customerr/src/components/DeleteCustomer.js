import React, { useState } from 'react';
import axios from 'axios';
import './DeleteCustomer.css';

function DeleteCustomer() {
  const [customerId, setCustomerId] = useState('');

  const handleChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8080/customer/${customerId}`)
      .then(response => {
        alert('Customer deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting customer:', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(`Error: ${error.response.data.message || error.response.statusText}`);
        } else if (error.request) {
          // The request was made but no response was received
          alert('Error: No response from server');
        } else {
          // Something happened in setting up the request that triggered an Error
          alert(`Error: ${error.message}`);
        }
      });
  };

  return (
    <div className="delete-customer-container">
      <h2>Delete Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerId"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={handleChange}
          required
        />
        <button type="submit">Delete Customer</button>
      </form>
    </div>
  );
}

export default DeleteCustomer;
