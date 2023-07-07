import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import AboutPage from './views/AboutPage';
import Ayuda from './views/Ayuda';
import DetailPage from './views/DetailPage';
import ItemsByCategory from './components/ItemsByCategory/ItemsByCategory';


// HOC => HIGH ORDER COMPONENT
import { ItemsProvider } from "./context/ItemsContext";
import { CartProvider } from "./context/CartContext";


import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CartView from './views/CartView';
import ConfirmPurchase from './views/ConfirmPurchase';

function App() {
  return (
    
    <CartProvider>
      <ItemsProvider>
        <Router>
          <NavBar />
          <div className="App">
            <Routes>
              <Route path='/'element={<ItemListContainer />} />
              <Route path='/nosotros'element={<AboutPage/>} />
              <Route path='/ayuda'element={<Ayuda />} />
              <Route path='/cart'element={<CartView />} />
              <Route path='/confirmPurchase'element={<ConfirmPurchase />} />
              <Route path='/detail/:id' element={<DetailPage />} />
              <Route path='/category/:category' element={<ItemsByCategory />}/>
            </Routes>
          </div>
        </Router>
      </ItemsProvider>
    </CartProvider>
   
  );
}

export default App;
