import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import NavBar from './components/presentation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting="Bienvenido a PixelStore!"/>
    </div>
  );
}

export default App;
