# AccessFlow Backend Documentation

## Overview
AccessFlow is an Intelligent Campus Mobility & Authorization Platform designed to streamline the process of pass requests and enhance campus security. This backend documentation provides an overview of the backend structure, setup instructions, and API endpoints.

## Tech Stack
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building RESTful APIs.
- **MySQL**: Relational database for storing user and pass request data.
- **JWT**: For secure user authentication and authorization.
- **Google OAuth**: For third-party authentication.

## Folder Structure
The backend is organized into the following structure:

```
backend/
├── src/
│   ├── config/                # Database configuration
│   ├── controllers/           # Business logic for handling requests
│   ├── middlewares/           # Middleware for authentication and validation
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── services/              # Business logic services
│   ├── utils/                 # Utility functions
│   ├── app.js                 # Express app initialization
│   └── server.js              # Server entry point
├── package.json                # Project dependencies and scripts
├── .env.example                # Example environment variables
└── README.md                  # Backend documentation
```

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd AccessFlow/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to `.env` and fill in the required values (e.g., database credentials, JWT secret).

4. **Run Database Migrations**
   - Ensure MySQL is running and execute the SQL scripts in `database/schema.sql` to set up the database.

5. **Start the Server**
   ```
   npm start
   ```

## API Endpoints
The backend exposes the following RESTful API endpoints:

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a JWT.
- **GET /api/auth/google**: Authenticate using Google OAuth.

### Pass Requests
- **POST /api/pass**: Create a new pass request.
- **GET /api/pass**: Retrieve all pass requests (admin only).
- **PATCH /api/pass/:id/approve**: Approve a pass request.
- **PATCH /api/pass/:id/reject**: Reject a pass request.

### User Management
- **GET /api/users**: Retrieve all users (admin only).
- **GET /api/users/:id**: Retrieve a specific user by ID.
- **PATCH /api/users/:id**: Update user information.

### Notifications
- **GET /api/notifications**: Retrieve notifications for the user.
- **POST /api/notifications**: Create a new notification.

### Analytics
- **GET /api/analytics**: Retrieve analytics data related to pass requests.

### Audit Logs
- **GET /api/audit**: Retrieve audit logs of actions taken by users.

## Conclusion
This README provides a comprehensive overview of the backend structure and setup for the AccessFlow project. For further details on API usage, refer to the API documentation located in the `docs/api.md` file.

---

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.