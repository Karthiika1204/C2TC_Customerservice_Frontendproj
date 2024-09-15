import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ManageCustomers from './components/ManageCustomers';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import ViewCustomers from './components/ViewCustomers';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-customers" element={<ManageCustomers />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/update-customer" element={<UpdateCustomer />} />
          <Route path="/delete-customer" element={<DeleteCustomer />} />
          <Route path="/view-customers" element={<ViewCustomers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
