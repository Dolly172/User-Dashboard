import React from 'react';

const UserTable = ({ users, onSortChange, filters }) => {
  return (
    <table>
      <thead>
        <tr>
          <th
            scope="col"
            aria-sort={
              filters.sortField === 'name'
                ? filters.sortDirection
                : 'none'
            }
            onClick={() => onSortChange('name')}
            style={{ cursor: 'pointer' }}
          >
            Name {filters.sortField === 'name' && (filters.sortDirection === 'asc' ? '▲' : filters.sortDirection === 'desc' ? '▼' : '')}
          </th>
          <th
            scope="col"
            aria-sort={
              filters.sortField === 'email'
                ? filters.sortDirection
                : 'none'
            }
            onClick={() => onSortChange('email')}
            style={{ cursor: 'pointer' }}
          >
            Email {filters.sortField === 'email' && (filters.sortDirection === 'asc' ? '▲' : filters.sortDirection === 'desc' ? '▼' : '')}
          </th>
          <th scope="col">Role</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
