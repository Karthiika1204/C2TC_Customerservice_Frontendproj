import React from 'react';
import './ManageCustomers.css';

function ManageCustomers() {
  return (
    <div className="manage-container">
      <h1>Manage Customer Details</h1>
      <div className="button-group">
        <button className="crud-button" onClick={() => window.location.href='/add-customer'}>Add Customer</button>
        <button className="crud-button" onClick={() => window.location.href='/update-customer'}>Update Customer</button>
        <button className="crud-button" onClick={() => window.location.href='/view-customers'}>View All Customers</button>
        <button className="crud-button" onClick={() => window.location.href='/delete-customer'}>Delete Customer</button>
      </div>
    </div>
  );
}

export default ManageCustomers;
