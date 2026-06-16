# API Documentation for AccessFlow

## Overview
AccessFlow is an Intelligent Campus Mobility & Authorization Platform that allows students, security personnel, and administrators to manage mobility requests and authorization processes efficiently. This document outlines the RESTful API endpoints available in the AccessFlow application.

## Base URL
The base URL for the API is:
```
http://localhost:5000/api
```

## Authentication
### Login
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "string"
    }
    ```
  - **401 Unauthorized**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

### Google OAuth
- **Endpoint:** `GET /auth/google`
- **Description:** Initiates Google OAuth authentication.
- **Response:** Redirects to Google login page.

### Google OAuth Callback
- **Endpoint:** `GET /auth/google/callback`
- **Description:** Handles the callback from Google after authentication.
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "string"
    }
    ```

## Pass Requests
### Create Pass Request
- **Endpoint:** `POST /passes`
- **Description:** Creates a new pass request.
- **Request Body:**
  ```json
  {
    "userId": "string",
    "reason": "string",
    "startDate": "string",
    "endDate": "string"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "Pass request created",
      "passId": "string"
    }
    ```

### Approve Pass Request
- **Endpoint:** `PUT /passes/:id/approve`
- **Description:** Approves a pass request.
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Pass request approved"
    }
    ```

### Reject Pass Request
- **Endpoint:** `PUT /passes/:id/reject`
- **Description:** Rejects a pass request.
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Pass request rejected"
    }
    ```

### Get Pass History
- **Endpoint:** `GET /passes/history`
- **Description:** Retrieves the history of pass requests for a user.
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "passId": "string",
        "status": "string",
        "createdAt": "string"
      }
    ]
    ```

## Notifications
### Get Notifications
- **Endpoint:** `GET /notifications`
- **Description:** Retrieves notifications for the logged-in user.
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "notificationId": "string",
        "message": "string",
        "createdAt": "string"
      }
    ]
    ```

## Analytics
### Get Analytics Data
- **Endpoint:** `GET /analytics`
- **Description:** Retrieves analytics data related to pass requests.
- **Response:**
  - **200 OK**
    ```json
    {
      "totalRequests": "number",
      "approvedRequests": "number",
      "rejectedRequests": "number"
    }
    ```

## Audit Logs
### Get Audit Logs
- **Endpoint:** `GET /audit`
- **Description:** Retrieves audit logs for actions taken by users.
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "action": "string",
        "userId": "string",
        "timestamp": "string"
      }
    ]
    ```

## Error Handling
All endpoints will return appropriate HTTP status codes and error messages in the following format:
```json
{
  "message": "Error description"
}
```

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available in the AccessFlow application. For further details on deployment and usage, please refer to the deployment documentation.

Please confirm if you would like to proceed to the next phase, which is generating the README.md file.