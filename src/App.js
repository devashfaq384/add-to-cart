import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import store from './store/store'

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter >
        <div className='App '>
          <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/cart' element={<Cart></Cart>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
