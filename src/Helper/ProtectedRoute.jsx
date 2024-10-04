import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/userContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState();
  const { autenticado, handleAutoLogin } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    try {
      handleAutoLogin();
    } catch (error) {
      setLoading(false);
      <Navigate to="/" />;
    } finally {
      setLoading(false);
      <Navigate to="/login" />;
    }
  }, []);
  if (loading) return <>Loading ...</>;
  if (autenticado) return children;
};

export default ProtectedRoute;
