import { Route, Routes } from 'react-router-dom';
import AdminDash from './AdminDash';
import ProtectedRoute from '../../Helper/ProtectedRoute';
function Admin() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AdminDash />
          </ProtectedRoute>
        }
        path="/"
      ></Route>
    </Routes>
  );
}

export default Admin;
