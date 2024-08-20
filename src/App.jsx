import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Admin />} path="admin/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
