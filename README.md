# AccessFlow - Intelligent Campus Mobility & Authorization Platform

## Overview
AccessFlow is a full-stack application designed to facilitate intelligent campus mobility and authorization. It provides a seamless experience for students, security personnel, and administrators to manage pass requests, track history, and ensure secure access across campus facilities.

## Tech Stack
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT, Google OAuth

## User Roles
- **Student**: Can register, create pass requests, and view pass history.
- **Security Guard**: Can verify QR codes and manage pass approvals.
- **Administrator**: Can oversee all operations, manage users, and access analytics.

## Core Features
- Student registration and login
- Google OAuth authentication
- JWT-based authorization
- Pass request creation
- Approval and rejection workflow
- QR code generation for approved passes
- QR code verification by security personnel
- Pass history and status tracking
- Notifications system
- Audit logs for all actions
- Analytics dashboard
- Search, filters, and pagination
- Fully responsive UI

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MySQL (version 5.7 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/AccessFlow.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd AccessFlow/backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Configuration
1. Create a `.env` file in the backend directory based on the `.env.example` file and configure your database connection and authentication settings.
2. Create a `.env` file in the frontend directory based on the `.env.example` file and configure your API endpoint.

### Running the Application
1. Start the backend server:
   ```
   cd AccessFlow/backend
   npm start
   ```
2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```
3. Access the application in your browser at `http://localhost:3000`.

## Deployment
For deployment instructions, refer to the [deployment documentation](docs/deployment.md).

## API Documentation
For detailed API usage, refer to the [API documentation](docs/api.md).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides an overview of the AccessFlow project, including its purpose, tech stack, user roles, core features, and instructions for getting started. 

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.