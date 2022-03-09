import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Slider/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/LoginPage/LogIn/Login';
import Signup from './Components/LoginPage/SignUp/Signup';
import Edit from './Components/LoginPage/Edit/Edit';

function App() {
  return (
      <Router>
        <div className="App">
            <header className="App-header">        
              <Navbar />

              <Routes>           
                  <Route exact path="/" element={ <Home /> } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />                  
                  <Route path="/edit" element={<Edit />} />                  
                  
              </Routes>
            </header>
        </div>
      </Router>
  );
}

export default App;
