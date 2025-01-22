import About from './components/About';
import Home from './components/Home';
import ClassCompEG from './classcomponents/ClassCompEG';
import Contact from './components/Contact'
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery image="ishan logo" page="Gallery" />} />
        <Route path="/class-comp-eg" element={<ClassCompEG />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
