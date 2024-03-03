import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Dashboard1 from './components/Dashboard1';
import Department from './Pages/Department';
import Pagination from './Pages/Pagination';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard/faculty' element={<Dashboard1 />} />
          <Route path='/dashboard/student' element={<h1>Dashboard</h1>} />
          <Route path="/" element={<Hero />} />
          <Route path="/dept" element={<Department />} />
          <Route path="/project" element={<Pagination />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
