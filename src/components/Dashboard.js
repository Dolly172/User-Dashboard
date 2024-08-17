import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import { userData } from '../data';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    role: '',
    status: '',
    sortField: '',
  });

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
  const updatedUsers = userData
    .filter(user =>
    user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(filters.searchTerm.toLowerCase())
    )
    .filter(user => filters.role ? user.role === filters.role : true)
    .filter(user => filters.status ? user.status === filters.status : true)
    .sort((a, b) => {
    if (!filters.sortField) return 0;
    return a[filters.sortField].localeCompare(b[filters.sortField]);
    });

  setFilteredUsers(updatedUsers);
  }, [filters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (field) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      sortField: field,
    }));
  };

  return (
    <div className="dashboard">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or email"
          name="searchTerm"
          value={filters.searchTerm}
          onChange={handleInputChange}
          aria-label="Search"
        />
        <select name="role" onChange={handleInputChange} aria-label="Filter by role">
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <select name="status" onChange={handleInputChange} aria-label="Filter by status">
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <UserTable users={filteredUsers} onSortChange={handleSortChange} sortField={filters.sortField} />
    </div>
  );
};

export default Dashboard;
