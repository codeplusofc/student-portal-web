import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterStudentForm from '../features/student/components/RegisterStudentForm.tsx';
import LoginPage from '../features/auth/components/LoginForm';
import Dashboard from "../features/dashboard/Dashboard";
import RegisterUserForm from "../features/auth/components/RegisterUserForm.tsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
  {/* Autenticação */}
  <Route path="/login" element={<LoginPage />} />
  <Route path="/auth" element={<RegisterUserForm />} />

  {/* Alunos */}
  <Route path="/register" element={<RegisterStudentForm />} />

  {/* Dashboard */}
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
    </Router>
  );
};

export default AppRoutes;