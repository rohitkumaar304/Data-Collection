import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route exact path="/" element={<Create />} />
          <Route path="/All" element={<Read />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;