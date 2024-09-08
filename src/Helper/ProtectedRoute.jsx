import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/userContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState();
  const { autenticado, handleAutoLogin } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    try {
      handleAutoLogin();
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
      <Navigate to="/login" />;
    }
  }, []);

  if (loading) return null;
  if (!autenticado) return <Navigate to="/" />;
  if (autenticado) return children;
};

export default ProtectedRoute;
