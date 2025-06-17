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
        <Route path="/products" element={<div>Product Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="*" exact="true" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
