import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import AboutPage from './views/AboutPage';
import Ayuda from './views/Ayuda';
import DetailPage from './views/DetailPage';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/'element={<ItemListContainer />} />
          <Route path='/nosotros'element={<AboutPage/>} />
          <Route path='/ayuda'element={<Ayuda />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
