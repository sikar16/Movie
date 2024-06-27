import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './MarkUp/Component/Header/Header';
import HomePage from './MarkUp/HomePage/HomePage';
import Footer from './MarkUp/Component/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;