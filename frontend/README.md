# AccessFlow Frontend Documentation

## Overview
AccessFlow is an Intelligent Campus Mobility & Authorization Platform designed to streamline the process of pass requests and enhance campus security. This frontend application is built using React.js and provides a responsive user interface for students, security personnel, and administrators.

## Features
- **User Authentication**: Students can register and log in using traditional methods or Google OAuth.
- **Pass Request Management**: Students can create pass requests, which can be approved or rejected by administrators.
- **QR Code Generation**: Approved passes are generated as QR codes for easy verification by security personnel.
- **Pass History Tracking**: Users can view their past pass requests and their statuses.
- **Notifications**: Users receive notifications regarding their pass requests and other important updates.
- **Analytics Dashboard**: Administrators can access analytics related to pass requests and user activity.
- **Audit Logs**: All actions are logged for security and compliance purposes.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/AccessFlow.git
   ```
2. Navigate to the frontend directory:
   ```
   cd AccessFlow/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Environment Variables
Create a `.env` file in the `frontend` directory and add the following variables:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## Folder Structure
```
frontend
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── utils
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── .env.example
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- React.js for building the user interface.
- JWT and Google OAuth for secure authentication.

Please confirm if you would like to proceed to the next phase, which is generating the backend structure with routes, controllers, middleware, services, and models.