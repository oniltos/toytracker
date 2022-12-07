import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ManageItemsPage from './pages/ManageItemsPage';

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
        <Route path='/items/manage' element={ <ManageItemsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
