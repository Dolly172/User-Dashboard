import React, { useState, useMemo } from 'react';
import { userData } from '../data';
import Pagination from './Pagination';
import UserTable from './UserTable';
import FilterBar from './FilterBar';

const PAGE_SIZE = 6;

const Dashboard = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    role: '',
    status: '',
    sortField: '',
    sortDirection: '',
  });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    let sortedAndFilteredUsers = userData
      .filter(user =>
        user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
      .filter(user => filters.role ? user.role === filters.role : true)
      .filter(user => filters.status ? user.status === filters.status : true)
      
      if (filters.sortField) {
        sortedAndFilteredUsers = sortedAndFilteredUsers.sort((a, b) => {
          if (filters.sortDirection === 'asc') {
            return a[filters.sortField].localeCompare(b[filters.sortField]);
          } else if (filters.sortDirection === 'desc') {
            return b[filters.sortField].localeCompare(a[filters.sortField]);
          }
          return 0; 
        });
      }

      return sortedAndFilteredUsers
    }, [filters]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredUsers.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredUsers, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredUsers.length / PAGE_SIZE);
  }, [filteredUsers]);

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
    setFilters((prevFilters) => {
        let newSortDirection = '';
        if (prevFilters.sortField === field) {
          if (prevFilters.sortDirection === 'asc') {
            newSortDirection = 'desc';
          } else if (prevFilters.sortDirection === 'desc') {
            newSortDirection = '';
          } else {
            newSortDirection = 'asc';
          }
        } else {
          newSortDirection = 'asc';
        }
  
        return {
          ...prevFilters,
          sortField: field,
          sortDirection: newSortDirection,
        };
      });
  };

  return (

    <div className="dashboard">
      <FilterBar filters={filters} handleInputChange={handleInputChange} />
      <UserTable users={paginatedUsers} onSortChange={handleSortChange} filters={filters} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Dashboard;
