import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './MarkUp/Component/Header/Header';
import HomePage from './MarkUp/HomePage/HomePage';
import Footer from './MarkUp/Component/Footer/Footer';
import SinglePage from './MarkUp/Component/Watch/SinglePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SinglePage/:id" element={<SinglePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;