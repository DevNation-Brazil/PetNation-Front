import { Box, TextField } from "@mui/material";
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


    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    
    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
               
            } else {
                alert("E-mail ou senha incorretos.")
            }
        }
    }





    return (
        <div className="criarContaWrapper">

            <Box component="form" className="loginBox" onSubmit={handleLogin} sx={{ width: {xs: 300,
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
                    onChange={handleEmailInput}
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
                    onChange={handlePasswordInput}
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
                    Entrar</button>

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