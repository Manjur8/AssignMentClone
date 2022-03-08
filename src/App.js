import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Slider/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <header className="App-header">        
              <Navbar />

              <Routes>           
                  <Route exact path="/" element={ <Home /> } />
                  
              </Routes>
            </header>
        </div>
      </Router>
  );
}

export default App;
