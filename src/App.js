import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.Page';
import ArsenalPage from './pages/Aresnal.Page';
import AgentPage from './pages/Agent.Page';
import WeaponInfoPage from './pages/Weapon.Page';

// API : database
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.params = {};


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/agents" element={<AgentPage />}></Route>
      <Route path="/weapons" element={<ArsenalPage />}></Route>
      <Route path="/weapons/:id" element={<WeaponInfoPage />}></Route>
    </Routes>
  );
}

export default App;
