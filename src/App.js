import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ManageItemsPage from './pages/ManageItemsPage';
import CreateItemPage from './pages/CreateItemPage';
import Navbar from './components/Navbar';
import ItemDetailsPage from './pages/ItemDetailsPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/items/manage' element={ <ManageItemsPage /> } />
        <Route path='/items/create' element={ <CreateItemPage /> } />
        <Route path='/items/:itemId' element={ <ItemDetailsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
