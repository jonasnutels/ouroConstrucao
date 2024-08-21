import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AdminLogin from './Pages/Admin/AdminLogin';
import { UserStorage } from './userContext/userContext';
import { Toaster } from 'sonner';
import Admin from './Pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      <Toaster richColors />
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Admin />} path="admin/*" />
            <Route element={<AdminLogin />} path="login" />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
