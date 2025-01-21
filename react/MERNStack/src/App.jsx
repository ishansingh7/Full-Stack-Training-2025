import About from './components/About'
import Home from './components/Home'
import ClassCompEG from './classcomponents/ClassCompEG'
import Glarry from './components/Glarry'
import Contact from './components/conact'
import Navabar from './components/Navbar'
function App() {

  return (
    <>
     <Navabar /><span>Home</span> <span>About</span><span></span>
    
        
      <Home />
      <About />
      <Contact />
      <Glarry image="ishan logo" page="Glarry" />
      <ClassCompEG />
  
    
      </>

  )
}

export default App
