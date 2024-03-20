import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './page/Home';
import SobreMi from './page/SobreMi';
import Habilidades from './page/Habilidades';
import Proyectos from './page/Proyectos';


function App() {
  return (
    <>   
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />}/>

      </Routes>
  </>
  );
}

export default App;
