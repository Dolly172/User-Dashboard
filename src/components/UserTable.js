import React from 'react';

const UserTable = ({ users, onSortChange, sortField }) => {
  return (
    <table>
      <thead>
        <tr>
          <th 
            onClick={() => onSortChange('name')}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && onSortChange('name')}
            aria-sort={sortField === 'name' ? 'ascending' : 'none'}
          >
            Name
          </th>
          <th 
            onClick={() => onSortChange('email')}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && onSortChange('email')}
            aria-sort={sortField === 'email' ? 'ascending' : 'none'}
          >
            Email
          </th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default React.memo(UserTable);
