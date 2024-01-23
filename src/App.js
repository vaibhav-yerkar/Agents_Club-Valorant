import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.Page';

// API : database
axios.defaults.baseURL = 'https://valorant-api.com/v1';
axios.defaults.params = {};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="agents/:uuid"></Route>
      <Route path="/weapons"></Route>
      <Route path="/weapons/:uuid"></Route>
    </Routes>
  );
}

export default App;
