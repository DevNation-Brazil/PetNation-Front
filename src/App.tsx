import { Route, Routes } from "react-router-dom";
import Colecao from "./Paginas/Colecao/Colecao";
import PaginaCadastro from "./Paginas/PaginaCadastro/PáginaCadastro";
import "./App.css"
import PaginaContato from "./Paginas/PaginaContato/PaginaContato";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Colecao />} />

      <Route path='/cadastro' element={<PaginaCadastro />} />

      <Route path="/contato" element={<PaginaContato />} />


    </Routes>
  );
}

export default App;
