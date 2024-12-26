import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ML from './components/ML';
import Reads from './components/Reads';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ml" element={<ML />} />
          <Route path="/reads" element={<Reads />} />

          <Route path="/ml/:slug" element={<BlogPost category="ml_blogs" />} />
          <Route path="/reads/:slug" element={<BlogPost category="reads_blogs" />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
};

export default App;
