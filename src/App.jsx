import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';

function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
