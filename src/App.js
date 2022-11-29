import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Initialize Router */}
      <Router>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          {/* Home Route MUST come in last!! */}
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
