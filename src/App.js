import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.Page';
import WeaponsPage from './pages/Weapons.Page';

// API : database
axios.defaults.baseURL = 'https://valorant-api.com/v1';
axios.defaults.params = {};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="agents/:uuid"></Route>
      <Route path="/weapons" element={<WeaponsPage />}></Route>
      <Route path="/weapons/:uuid"></Route>
    </Routes>
  );
}

export default App;
