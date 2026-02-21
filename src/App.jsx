import React from 'react' 
import NavBar from './component/nav'; 
import Home from './component/home';
import About from './component/about';
import Skills from './component/Skills';
import Projects from './component/projects';
import Footer from './component/footer';
import Contact from './component/contact';
import {Toaster} from "react-hot-toast"

function App() {
  return (
     <> 
     <div>
     <NavBar></NavBar>
     <Home></Home>  
     <About></About>
     <Skills></Skills> 
     <Projects></Projects> 
     <Contact></Contact>
     <Footer></Footer>
     </div> 
     <Toaster/>

     </>
  );
}

export default App
