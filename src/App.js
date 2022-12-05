import {Route} from 'react-router-dom'
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <div>
      <Header/>
      <main>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
      <Route path='/product-details/:product_id'>
        <ProductDetails/>
      </Route>
      </main>
    </div>
  );
}

export default App;
