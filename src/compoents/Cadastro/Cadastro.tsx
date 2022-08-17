import { Avatar, TextField, Autocomplete, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import doguito from "../../assets/doguito.svg"
import { IAnimal } from "../../Interfaces/IAnimal";
import "./Cadastro.css"
import { ITipo } from "../../Interfaces/tipo";
import axios from "axios";


function Cadastro() {
    const [active, setActive] = useState(false)
    console.log(active)



    const [sexoDoAnimal, setSexoDoAnimal] = useState('');


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSexoDoAnimal((event.target as HTMLInputElement).value);
    };

    const [nome, setNome] = useState<string>('')
    const [especie, setEspecie] = useState<string | null>('')
    const [raca, setRaca] = useState<string | null>('')
    const [porte, setPorte] = useState<string | null>('')
    const [idade, setIdade] = useState<string>('')
    const [imagem, setImagem] = useState<File | null> (null)


    const [tipos, setTipos] = useState<ITipo>()
    const [racas, setRacas] = useState([''])
    const [portes, setPortes] = useState([''])

    console.log(tipos)
    console.log(racas)
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/tipo`)
            .then(resposta => setTipos(resposta.data))

        axios.get(`http://localhost:8080/api/v1/raca`)
            .then(resposta => setRacas(resposta.data))

        
        
        setPortes(["Pequeno", "Médio", "Grande"])

    }, [])


    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }



    function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        /* tem que usar o useParams do react-router-dom 
        if (parametros.id) {

            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })

        } else {

            axios.post('http://localhost:8000/api/v2/restaurantes/', {
                nome: nomeRestaurante
            })
                .then(() => {
                    setNomeRestaurante('')
                    alert("Restaurante cadastrado com sucesso!")
                })
        */
        console.log({
            sexo: sexoDoAnimal,
            nome: nome,
            especie: especie,
            raca: raca,
            porte: porte,
            idade: idade
        })

        setActive(true)
        setTimeout(() => setActive(false), 5000)




    }

    return (
        <Box component="form" onSubmit={aoEnviar} className="cadastroWrapper" sx={{ height: 700 }}>



            <h2 className="titleCadastre" >Cadastre seu Pet</h2>

            <Avatar alt="Imagem Place Holder"
                src={doguito}
                className="avatarImg"
                sx={{ width: 150, height: 150, marginTop: 1, marginBotton: 1 }} />



            <input className="inputDeImagem" id="file-upload" type="file" onChange={selecionarArquivo} />


            <FormControl >
                <RadioGroup
                    row
                    aria-labelledby="femeaOuMacho"
                    name="femeaOuMacho"
                    value={sexoDoAnimal}
                    onChange={handleRadioChange}>

                    <FormControlLabel
                        value={"Fêmea"}
                        control={<Radio color="secondary"
                            required={true} />}
                        label={"Fêmea"} />

                    <FormControlLabel
                        value="Macho"
                        control={<Radio
                            required={true} />}
                        label={"Macho"} />

                </RadioGroup>

            </FormControl>

            <TextField value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nomeField"
                label="Nome"
                variant="standard"
                required
                sx={{ width: 300, marginTop: 1 }} />




           {/* <Autocomplete
                onChange={(event, value) => setTipos(value)}
                disablePortal
                id="especieAutoComplete"
               options={tipos?.nome}
                sx={{ width: 300, marginTop: 1 }}
                renderInput={(params) => <TextField
                    {...params}

                    id="especieField"
                    label="Espécie"
                    variant="standard"
                    required />}
            /> */}


            <Autocomplete
                onChange={(event, value) => setRaca(value)}
                disablePortal
                id="racaAutoComplete"
                options={racas}
                sx={{ width: 300, marginTop: 1 }}
                renderInput={(params) => <TextField

                    {...params}
                    id="racaField"
                    label="Raça"
                    variant="standard"
                    required />}
            />

            <Autocomplete
                onChange={(event, value) => setPorte(value)}
                disablePortal
                id="porteAutoComplete"
                options={portes}
                sx={{ width: 300, marginTop: 1 }}
                renderInput={(params) => <TextField

                    {...params}
                    id="porteField"
                    label="Porte"
                    variant="standard"
                    required />}
            />

            <TextField value={idade}
                onChange={(event) => {
                    setIdade(event.target.value);
                }}
                id="idadeField"
                label="Idade (em número)"
                variant="standard"
                type="number"

                required
                sx={{ width: 300, marginTop: 1 }} />

            <button className="botaoEnviar" type="submit" >
                Enviar  <div className="iconeDoBotao"><AiOutlineSend size={20} /></div></button>
                
            
                {
                    !active ? 
                        <Alert sx={{
                            width: {
                                xs: 280,
                                sm: 320,
                                md: 350,
                                lg: 500,
                                xl: 600,
                            },
                            marginTop: 2,
                            display: 'none'}}
                            severity="success"
                            className='alert'>Pet cadastrado com sucesso!
                        </Alert> : 
                        <Alert sx={{
                            width: {
                                xs: 280,
                                sm: 320,
                                md: 350,
                                lg: 500,
                                xl: 600,
                            },
                            marginTop: 2,}}>Pet cadastrado com sucesso!
                            </Alert>
                }
        </Box>

        
    );
}

export default Cadastro;