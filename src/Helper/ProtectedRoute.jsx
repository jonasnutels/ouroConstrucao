import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../userContext/userContext';
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

  if (loading) return <>Loading...</>;
  if (autenticado || !loading) return children;
};

export default ProtectedRoute;
