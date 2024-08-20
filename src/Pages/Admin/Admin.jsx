import { Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminDash from './AdminDash';
function Admin() {
  return (
    <Routes>
      <Route element={<AdminLogin />} path="login"></Route>
      <Route element={<AdminDash />} path="/"></Route>
    </Routes>
  );
}

export default Admin;
