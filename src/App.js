import './App.css';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';
import { ToDo } from './components/to-do/ToDo';

function App() {
  return (
    <div className="App">
            <Router>
              <header>
                <nav className="nav-bar">
                  <h1 className="logo">
                    <Link to="/">what's next?</Link>
                  </h1>
                  <ul className="nav-menu">
                    <li>
                      <Link to="/">about</Link>
                    </li>
                    <li>
                      <Link to="/to-do">to-do's</Link>
                    </li>
                    <li>
                      <Link to="/contact">contact</Link>
                    </li>
                  </ul>
                </nav>
              </header>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/to-do" element={<ToDo />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/" element={<Home />} />
                </Routes>
            </Router>
      
    </div>
  );
}

export default App;
