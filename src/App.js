import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ToyTracker</a>
            </div>
      </nav>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
    </div>
  );
}

export default App;
