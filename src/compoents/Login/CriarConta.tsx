import { Box, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import "./LoginCriarConta.css"


function CriarConta() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


  
    
    const handleCriaConta = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        
        axios.post('http://localhost:8080/user', {
                nome: nome,
                email: email,
                password: password,
        })
            .then(() =>{
                navigate('/login')
            })
    }





    return (
        <div className="criarContaWrapper">

            <Box component="form" className="loginBox" onSubmit={handleCriaConta} sx={{ width: {xs: 300,
                                                                    sm: 300,
                                                                    md: 320,
                                                                    lg: 480,
                                                                    xl: 500,} }}>

                <h3 className="loginTitle">Crie sua para cadastrar seu pet.</h3>


                <TextField
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    value={nome}
                    id="nome"
                    label="Digite seu nome"
                    variant="standard"
                    required
                    sx={{ width: {xs: 250,
                                 sm: 270,
                                 md: 320,
                                 lg: 380,
                                 xl: 400,}, marginTop: 1 }} />

                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    value={email}
                    id="email"
                    label="Digite seu e-mail"
                    variant="standard"
                    required
                    sx={{ width: {xs: 250,
                                 sm: 270,
                                 md: 320,
                                 lg: 380,
                                 xl: 400,}, marginTop: 3 }} />

                <TextField
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                    id="password-input"
                    label="Digite sua senha"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    required
                    sx={{ width: {xs: 250,
                        sm: 270,
                        md: 320,
                        lg: 380,
                        xl: 400,}, marginTop: 3 }}
                />


                <button className="botaoEntrar" 
                        type="submit" >
                    Criar Conta</button>

                <span className="novoPorAqui">
                    <Link to='/login'>
                        Faça login.
                    </Link>
                </span>

            </Box>
        </div>
    );
}

export default CriarConta;