import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterStudentForm from '../features/student/components/RegisterStudentForm.tsx';
import LoginPage from '../features/auth/components/LoginForm';
import Dashboard from "../features/dashboard/Dashboard";
import RegisterUserForm from "../features/auth/components/RegisterUserForm.tsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth" element={<RegisterUserForm />} />
        <Route path="/register" element={<RegisterStudentForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;