import {BrowserRouter, Route, Routers } from 'react-router-dom'
import MainPage from './pages/MainPages';
import NotFound from './pages/NotFound';
import ProductPage from './pages/productPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/> } />
        <Route path='/products' element={ProductPage} />
        <Route path='*' element={<NotFound/> } />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
