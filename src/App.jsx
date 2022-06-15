import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/presentation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a PixelStore!"/>
    </div>
  );
}

export default App;
