import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from '../features/student/components/RegisterForm';
import LoginPage from '../features/auth/components/LoginForm';
import Dashboard from "../features/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;