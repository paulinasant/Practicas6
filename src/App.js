import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './components/Home';
import About from './components/About';




function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/about" element ={<About />} />
              <Route path="/contacto" element ={<h1>Contacto</h1>} />

          </Routes>
        </Layout>
      </Router>

  );
}

export default App;