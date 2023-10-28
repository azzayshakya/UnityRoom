
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Foodcards from './Screens/Foodcards';
// import { CartProvider } from './Component/ContextReducer';

function App() {
  return (
    // <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/Signup" element={<Signup/>}/>
        <Route exact path ="/foodcards" element={<Foodcards/>}/>
      </Routes>
    </div>
    </Router>
        // </CartProvider>
  );
}

export default App;
