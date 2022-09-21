import { Route, Routes } from "react-router-dom";
import Colecao from "./Paginas/Colecao/Colecao";
import PaginaCadastro from "./Paginas/PaginaCadastro/PáginaCadastro";
import "./App.css"
import "./Styles/Styles.css"
import PaginaContato from "./Paginas/PaginaContato/PaginaContato";
import Landing from "./Paginas/Landing/Landing";
import { RequireAuth } from "./contexts/Auto/RequireAuth";
import { PaginaLogin } from "./Paginas/PaginaLogin/PaginaLogin";
import { PaginaCriarConta } from "./Paginas/PaginaLogin/PaginaCriarConta";



function App() {
  

  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<PaginaLogin />} />

      <Route path="/colecao" element={<Colecao />} />

      <Route path='/cadastro' element={<RequireAuth><PaginaCadastro /></RequireAuth>} />

      <Route path="/contato" element={<PaginaContato />} />

      <Route path="/criarconta" element={<PaginaCriarConta />} />


    </Routes>
  );
}

export default App;
