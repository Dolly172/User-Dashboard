import React from 'react'

function FilterBar({handleInputChange, filters}) {
  return (
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
  )
}

export default FilterBar