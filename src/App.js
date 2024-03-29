import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Initialize Router */}
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          {/* Home Route MUST come in last!! */}
          <Route path='/' element={<><Header /><Home /></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
