import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Page/Home/Home'
import Navbar from './Page/Shared/Navbar';
import Footer from './Page/Shared/Footer';
import NotFound from './Page/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/collection" element={<div>Collection Page</div>} />
        <Route path="/clearance" element={<div>Clearance Page</div>} />
        <Route path="/return-exchange" element={<div>Return & Exchange</div>} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="*" exact="true" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
