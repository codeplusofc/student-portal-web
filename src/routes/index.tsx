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
        <Route path="/register-user" element={<RegisterUserForm />} />
        <Route path="/register-student" element={<RegisterStudentForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;