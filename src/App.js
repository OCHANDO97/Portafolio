import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './page/Home';
import SobreMi from './page/SobreMi';
import Habilidades from './page/Habilidades';
import Contacto from './page/Contacto';
import Proyectos from './page/Proyectos';
import ListaCompra from './page/ListaProyectos/ListaCompra';
import ApiRestaurante from './page/ListaProyectos/ApiRestaurante';
import Scrapeo from './page/ListaProyectos/Scrapeo';


function App() {
  return (
    <>   
      <Navbar />  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />}/>
        <Route path="/listaCompra" element={<ListaCompra />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/apiRestaurante" element={<ApiRestaurante />} />
        <Route path="/webScraping" element={<Scrapeo />} />

        
      </Routes>
  </>
  );
}

export default App;
