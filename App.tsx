import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Login from './pages/Login';
import Layout from './components/Layout';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ManagementDashboard from './pages/ManagementDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import UserManagement from './pages/UserManagement';
import ReportsLogs from './pages/ReportsLogs';
import SettingsPage from './pages/SettingsPage';
import ToastContainer from './components/ToastContainer';

const AppContent: React.FC = () => {
  const { role, currentPage } = useAppContext();

  if (!role) {
    return <Login />;
  }

  const renderPage = () => {
    if (currentPage === 'settings') return <SettingsPage />;
    if (currentPage === 'users' && role === 'admin') return <UserManagement />;
    if (currentPage === 'reports' && (role === 'admin' || role === 'management')) return <ReportsLogs />;
    switch (role) {
      case 'student': return <StudentDashboard />;
      case 'admin': return <AdminDashboard />;
      case 'management': return <ManagementDashboard />;
      case 'faculty': return <FacultyDashboard />;
      default: return null;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
      <ToastContainer />
    </AppProvider>
  );
};

export default App;
