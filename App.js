import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Project from './pages/Project.jsx';
import Opportunity from './pages/Opportunity.jsx';
import Comment from './pages/Comment.jsx';
import CustomerDetails from './pages/CustomerDetails.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/customerdetails" element={<CustomerDetails />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;