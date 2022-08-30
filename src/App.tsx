import { Route, Routes } from "react-router-dom";
import Colecao from "./Paginas/Colecao/Colecao";
import PaginaCadastro from "./Paginas/PaginaCadastro/PáginaCadastro";
import "./App.css"
import PaginaContato from "./Paginas/PaginaContato/PaginaContato";
import Landing from "./Paginas/Landing/Landing";
import { RequireAuth } from "./contexts/Auto/RequireAuth";
import { PaginaLogin } from "./Paginas/PaginaLogin/PaginaLogin";



function App() {
  

  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/home" element={<PaginaContato />} />

      <Route path="/login" element={<PaginaLogin />} />

      <Route path="/colecao" element={<Colecao />} />

      <Route path='/cadastro' element={<RequireAuth><PaginaCadastro /></RequireAuth>} />




    </Routes>
  );
}

export default App;
