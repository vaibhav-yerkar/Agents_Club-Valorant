import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.Page';
import ArsenalPage from './pages/Aresnal.Page';

// API : database
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.params = {};


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="agents/:uuid"></Route>
      <Route path="/weapons" element={<ArsenalPage />}></Route>
      <Route path="/weapons/:uuid"></Route>
    </Routes>
  );
}

export default App;
