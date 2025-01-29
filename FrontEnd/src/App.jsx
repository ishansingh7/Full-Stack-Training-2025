import About from './components/About';
import Home from './components/home';
import ClassCompEG from './classcomponents/ClassCompEG';
import Contact from './components/Contact'
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseEffectApi from './Hooks/UseEffectAPI';
import UseRef from './Hooks/UseRef';
import UseMemo from './Hooks/UseMemo';
import UseCallBack from './Hooks/UseCallBack';
import ReactLifeCycle from './classcomponents/ReactLifeCycle';
import LazyLoadingSuspense from './contextComponents/LazyLoadingSuspense';
import HoC from './Hoc/HoC';
import UseLocalStorage from './Hooks/useLocalStorage';








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
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-api" element={<UseEffectApi />} />
        <Route path="/use-Ref" element={<UseRef />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-call" element={<UseCallBack />} />
        <Route path="/react-lifecycle" element={<ReactLifeCycle />} />
        <Route path="/lazy-load" element={<LazyLoadingSuspense/>} />
        <Route path="/use-local" element={<UseLocalStorage/>} />
        <Route path="/hoc" element={<HoC/>} />
  
       

       
       
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
