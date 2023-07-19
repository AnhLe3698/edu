import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/diagnostictests">Diagnostic Tests</Link></li>
        <li><Link to="/exercises">Personalized Exercises</Link></li>
        <li><Link to="/progress">Progress Tracking</Link></li>
        <li><Link to="/help">Support/Help</Link></li>
      </ul>
    </nav>
  );
};

const Home = () => <h1>Home Screen</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const DiagnosticTests = () => <h1>Diagnostic Tests</h1>;
const Exercises = () => <h1>Personalized Exercises</h1>;
const Progress = () => <h1>Progress Tracking</h1>;
const Help = () => <h1>Support/Help</h1>;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnostictests" element={<DiagnosticTests />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
