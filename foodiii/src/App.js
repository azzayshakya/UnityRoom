
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
import { CartProvider } from './Component/ContextReducer';
import MyOrder from './Screens/MyOrder';
import RagisterResturent from './Screens/RagisterResturent';
import RestOrder from './Screens/RestOrder';


function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/Signup" element={<Signup/>}/>
        <Route exact path ="/RagisterResturent" element={<RagisterResturent/>}/>
        <Route exact path ="/RestOrder" element={<RestOrder/>}/>
        <Route exact path ="/foodcards" element={<Foodcards/>}/>
        <Route exact path ="/myOrder" element={<MyOrder/>}/>

      </Routes>
    </div>
    </Router>
      </CartProvider>
  );
}

export default App;
