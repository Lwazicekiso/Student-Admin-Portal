# Student Admin Portal

## Overview
The **Student Admin Portal** is a comprehensive web-based application tailored for managing administrative tasks in educational institutions. It offers distinct interfaces for administrators, lecturers, students, and applicants, streamlining the management of applicants, courses, modules, assessments, and student records. Built with **React**,**React Admin**, **Vite**, and **PocketBase**, the system ensures a modern, efficient, and user-friendly experience.

## Key Features
### General Highlights
- **Role-based Access Control**: Fine-grained permissions for Admins, Lecturers, Students, and Applicants using PocketBase collections and rules.
- **Dynamic Multi-step Forms**: Applicant registration includes a step-by-step wizard with field validation and document upload capabilities.
- **Efficient Data Management**: Seamless CRUD operations powered by React Admin's data provider and PocketBase’s REST API.
- **Responsive Design**: Fully optimized for mobile and tablet devices using Material-UI and custom breakpoints.
- **Modular Architecture**: Reusable components for forms, tables, and cards ensure maintainability and scalability.

### Interfaces
- **Admin**:
  - Manage applicants, students, lecturers, courses, modules, and assessments.
  - Perform CRUD operations and manage relationships between entities.
- **Lecturer**:
  - Oversee assessments and modules.
  - Access and update student records for their respective modules.
- **Student**:
  - View courses, modules, and assessments.
  - Submit assignments and monitor academic progress.
- **Applicant**:
  - Register using a multi-step wizard.
  - Upload required documents, select courses, and provide personal and academic details.

## System Architecture
- **Frontend**: Built with React and React-Admin for resource management.
- **Backend**: Powered by PocketBase for database and API management.
- **Styling**: Consistent and modern design using Material-UI and custom CSS.

## Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PocketBase server

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Lwazicekiso/Student-Admin-Portal.git
   cd student-admin-portal
   ```

2. Navigate to the main folder:
   ```bash
   cd Admin_Central
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install additional packages:
   ```bash
   npm install pocketbase react-admin
   ```

## Usage
- Start the development server:
  ```bash
  npm run dev
  ```
- Build the project for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

## Dependencies
![React](https://img.shields.io/badge/Frontend-React-blue)
![PocketBase](https://img.shields.io/badge/Backend-PocketBase-orange)
![MaterialUI](https://img.shields.io/badge/UI-MaterialUI-purple)
![ReactAdmin](https://img.shields.io/badge/Admin-ReactAdmin-teal)

- **PocketBase**: Backend and database management.
- **React**: Frontend framework.
- **React Admin**: Admin panel and resource management.
- **React Router DOM**: Routing for the application.

## License
This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for more details.

