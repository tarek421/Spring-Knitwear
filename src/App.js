import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Page/Home/Home'
import Navbar from './Page/Shared/Navbar';
import Footer from './Page/Shared/Footer';
import NotFound from './Page/NotFound/NotFound';
import About from './Page/About/About';
import Products from './Page/Products/Products';
import Contacts from './Page/Contacts/Contact/Contacts';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" exact="true" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
