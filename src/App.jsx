import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ML from './components/ML';
import Reads from './components/Reads';
import BlogPost from './components/BlogPost';  // Make sure BlogPost is imported
import Header from './components/Header';
import Footer from './components/Footer';  // Import Footer

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          <Route path="/ml" element={<ML />} /> {/* List of ML blogs */}
          <Route path="/reads" element={<Reads />} /> {/* List of Reads blogs */}

          {/* Blog Post routes for dynamic paths */}
          <Route path="/ml/:slug" element={<BlogPost category="ml_blogs" />} />
          <Route path="/reads/:slug" element={<BlogPost category="reads_blogs" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
