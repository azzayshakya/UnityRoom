
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './Pages/Home' 
import CreateMeet from './Pages/CreateMeet'
import JoinMeet from './Pages/JoinMeet' 
import LoginPage from './Pages/LoginPage' 
import SignUpPage from './Pages/SignUpPage' 
 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/JoinMeet' element={<CreateMeet/>} ></Route>
          <Route exact path='/CreateMeet' element={<JoinMeet/>} ></Route>
          <Route exact path='/LoginPage' element={<LoginPage/>} ></Route>
          <Route exact path='/SignUpPage' element={<SignUpPage/>} ></Route>
          
        </Routes>
      </Router>
      

      
    </div>
  );
}

export default App;
