import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PassRequestPage from './pages/PassRequestPage';
import PassHistoryPage from './pages/PassHistoryPage';
import VerifyQRPage from './pages/VerifyQRPage';
import AdminPage from './pages/AdminPage';
import { AuthProvider } from './contexts/AuthContext';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/pass-request" component={PassRequestPage} />
          <Route path="/pass-history" component={PassHistoryPage} />
          <Route path="/verify-qr" component={VerifyQRPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;