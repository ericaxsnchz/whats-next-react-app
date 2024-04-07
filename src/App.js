import './App.css';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Contact } from './components/contact/Contact';
import { Home } from './components/home/Home';
import { ToDo } from './components/to-do/ToDo';

function App() {
  return (
    <div className="App">
      <header className="header">
            <Router>
            <h1>
              <Link to="/home">what's next?</Link>
            </h1>
              <ul>
                <li>
                  <Link to="/home">about</Link>
                </li>
                <li>
                  <Link to="/to-do">to-do's</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/to-do" element={<ToDo />} />
                <Route path="/contact" element={<Contact />} />
                <Route element={<Home />} />
              </Routes>
            </Router>
      </header>
    </div>
  );
}

export default App;
