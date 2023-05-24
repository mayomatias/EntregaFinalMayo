import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetting="Hola mundo por props" />
      
    </div>
  );
}

export default App;
