import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './pages/Introduction';
import PatternMining from './pages/PatternMining';
import XAITechniques from './pages/XAITechniques';
import XAIAlgorithms from './pages/XAIAlgorithms';
import Video from './pages/Video';
import Applications from './pages/Applications';
import Future from './pages/Future';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-emerald-50">
        <Navbar />
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/pattern-mining" element={<PatternMining />} />
            <Route path="/xai-techniques" element={<XAITechniques />} />
            <Route path="/xai-algorithms" element={<XAIAlgorithms />} />
            <Route path="/video" element={<Video />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/future" element={<Future />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
