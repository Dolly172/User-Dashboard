import React, { useState, useMemo } from 'react';
import { userData } from '../data';
import Pagination from './Pagination';
import UserTable from './UserTable';

const PAGE_SIZE = 6;

const Dashboard = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    role: '',
    status: '',
    sortField: '',
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    const sortedAndFilteredUsers = userData
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

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return sortedAndFilteredUsers.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filters, currentPage]);

  const totalPages = useMemo(() => {
    const filteredDataCount = userData
      .filter(user =>
        user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
      .filter(user => filters.role ? user.role === filters.role : true)
      .filter(user => filters.status ? user.status === filters.status : true)
      .length;

    return Math.ceil(filteredDataCount / PAGE_SIZE);
  }, [filters]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Dashboard;
