import { Navigate, useLocation } from 'react-router-dom';
// import { useUser } from './UserContext';

const ProtectedRoute = ({ children }) => {
  // const user = useUser();
  const user = {
    isAuthenticated: true
  }
  const location = useLocation();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
