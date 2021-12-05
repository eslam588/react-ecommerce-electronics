import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';
import Details from './components/Details';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Provider} from 'react-redux';
import store from './components/store';


import "./App.css"

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
         <Navbar />
         <Switch>
            <Route exact path='/' component={Home}  />
            <Route  path='/products' component={Products}  />
            <Route  path='/cart' component={Cart}  />
            <Route  path='/about' component={About}  />
            <Route  path='/details/:id' component={Details}  />
            <Route  path='/contact' component={Contact}  />
            <Route  path='/about' component={About}  />
         </Switch>
         <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
