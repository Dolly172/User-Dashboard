# User Dashboard Application

## Overview

This project is a simple, responsive dashboard application built with React that displays a list of user data. The application includes features for viewing, filtering, sorting, and searching the data. It is designed to be accessible and optimized for performance.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Dolly172/User-Dashboard.git

2. **Navigate to the Project Directory:**

    ```bash
    cd User-Dashboard

3. **Install Dependencies:**

    ```bash
    npm install

4. **Start the Development Server:**

     ```bash
    npm start
   
- The application will be available at http://localhost:3000.

## Features

- **Data Display:** Displays user details including Name, Email, Role, and Status.
- **Filtering:** Filter users by Role and Status.
- **Sorting:** Sort users by Name and Email with ascending, descending, and original order options.
- **Search:** Search for users by Name or Email.
- **Pagination:** Navigate through pages with a fixed number of entries per page (6 entries).
- **Accessibility:** Fully navigable via keyboard and includes ARIA attributes for screen reader support.
- **Responsive Design:** The layout adapts to different screen sizes.

## How to Use

#### Viewing Data

The application displays a table of users with the following columns:
- **Name**
- **Email**
- **Role**
- **Status**

#### Filtering

- **Role Filter:** Select a role from the dropdown to filter users by their role.
- **Status Filter:** Choose between "Active" and "Inactive" to filter users by their status.

#### Sorting

- **Name and Email Columns:** Click on the column headers (Name or Email) to sort the data. The sorting behavior toggles between:

  1. **Ascending Order:** First click sorts the data in ascending order.
  2. **Descending Order:** Second click sorts the data in descending order.
  3. **Original Order:** Third click resets the data to its original unsorted order.

#### Searching

- **Search Bar:** Enter text in the search bar to filter the users by Name or Email. The search is case-insensitive.

#### Pagination

- **Page Navigation:** Navigate through pages using the pagination controls. Each page displays 6 entries.

## Accessibility

  1. **Keyboard Navigation:** The dashboard is fully navigable using the keyboard.
  2. **Screen Reader Support:** ARIA attributes are used to provide context for screen readers.
  3. **Sort Indicators:** Sort arrows are shown on hover over the table headers to indicate the sorting action.
