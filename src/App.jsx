import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import NavBar from './components/presentation/NavBar';
import NotFound from './components/presentation/NotFound';
import Cart from './components/containers/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"¡Bienvenido a PixelStore!"}/>}></Route>
        <Route path='/category/:id' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/contacto' element={<h1 style={{marginTop: "100px"}}>Info de contacto</h1>}></Route>
        <Route path='/nosotros' element={<h1 style={{marginTop: "100px"}}>Info de Nosotros</h1>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
