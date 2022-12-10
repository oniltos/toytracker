import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ManageItemsPage from './pages/ManageItemsPage';
import CreateItemPage from './pages/CreateItemPage';
import Navbar from './components/Navbar';
import ItemDetailsPage from './pages/ItemDetailsPage';
import EditItemPage from './pages/EditItemPage';
import ViewCollectionPage from './pages/ViewCollectionPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/items/manage' element={ <ManageItemsPage /> } />
        <Route path='/items/create' element={ <CreateItemPage /> } />
        <Route path='/items/:itemId' element={ <ItemDetailsPage /> } />
        <Route path='/items/:itemId/edit' element={ <EditItemPage />} />
        <Route path='/view-collection' element={ <ViewCollectionPage /> } />
      </Routes>
    </div>
  );
}

export default App;
