import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './views/Home/ItemListContainer';
import AboutPage from './views/About/AboutPage';
import Ayuda from './views/Help/Ayuda';
import DetailPage from './views/Detail/DetailPage';

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
