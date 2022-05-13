import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Product from './pages/Product';
import ProtectedPages from './pages/ProtectedPages';
import Cart from './pages/Cart';
import WelcomePage from './pages/WelcomePage';
import Purchased from './pages/Purchased';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  />
        {/*Rutas Privadas*/}
        <Route element={<ProtectedPages />} >
          <Route path='/' element={<WelcomePage/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<Product />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/cart/succes' element={<Purchased/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;