import { Avatar, TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, Button, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineSend } from "react-icons/ai";
import { useEffect, useState } from "react";
import doguito from "../../assets/doguito.svg"
import "./Cadastro.css"
import { ITipo } from "../../Interfaces/tipo";
import axios from "axios";
import { IRaca } from "../../Interfaces/raca";
import TituloPadras from "../TituloPadras/TituloPadras";


function Cadastro() {

    // referente ao alert de confirmação de cadastro
    const [active, setActive] = useState(false)



    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSexoDoAnimal((event.target as HTMLInputElement).value);
    };

    const [sexoDoAnimal, setSexoDoAnimal] = useState<string>('');
    const [nome, setNome] = useState<string>('')
    const [tipo, setTipo] = useState<any | null>('')
    const [raca, setRaca] = useState<any | null>('')
    const [porte, setPorte] = useState<any | null>('')
    const [idade, setIdade] = useState<string>('')


    const [tipos, setTipos] = useState<ITipo[]>([])
    const [racas, setRacas] = useState<IRaca[]>([])
    const [portes, setPortes] = useState<string[]>([])



    //Get auto complete de tipo e raca

    useEffect(() => {
        axios.get<ITipo[]>(`http://localhost:8080/api/v1/tipo`)
            .then(resposta => setTipos(resposta.data))

        axios.get<IRaca[]>(`http://localhost:8080/api/v1/raca`)
            .then(resposta => setRacas(resposta.data))



        setPortes(["Pequeno", "Médio", "Grande"])

    }, [])


    // Map para o autocomplete de tipo e raca
   const tiposAutoComplete:string[] = tipos.map(tiposMapped => {
        return tiposMapped.nome
    })

    const racasAutoComplete:string[] = racas.map(racasMapped => {
        return racasMapped.nome
    })



    // Imagem. Ver...
    const [imagem, setImagem] = useState<string | null | File>(doguito)

    

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }



    function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('sexo', sexoDoAnimal)
        formData.append('nome', nome)
        formData.append('tipo', tipo)
        formData.append('raca', raca)
        formData.append('porte', porte)
        formData.append('idade', idade)


        /* tem que usar o useParams do react-router-dom 
        if (parametros.id) {

            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert("Restaurante atualizado com sucesso!")
                })

        } else {}
       */

        axios.post('http://localhost:8080/api/v1/pet', {
                sexo: sexoDoAnimal,
                nome: nome,
                tipo: {
                    nome: tipo
                },
                raca: {
                    nome: raca
                },
                porte: porte,
                idade: idade,
        })
            .then(() => {
                setNome('')
                setTipos([])
                setRacas([])
                setPortes([])
                setIdade('')
                })
            
        

        setActive(true)
        setTimeout(() => setActive(false), 5000)

    }


    return (
        <Box component="form" onSubmit={aoEnviar} className="cadastroWrapper" sx={{ height: 700 }}>



            <TituloPadras texto="Cadastre seu Pet" />

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




                <Autocomplete
                    onChange={(event, value) => setTipo(value)}
                    disablePortal
                    id="tiposAutoComplete"
                    options={tiposAutoComplete}
                    sx={{ width: 300, marginTop: 1 }}
                    renderInput={(params) => <TextField
                        {...params}

                        id="especieField"
                        label="Tipos"
                        variant="standard"
                        required />}
                />



            <Autocomplete
                onChange={(event, value) => setRaca(value)}
                disablePortal
                id="racaAutoComplete"
                options={racasAutoComplete}
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
                /* Confirmação de cadastro */
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
                        display: 'none'
                    }}
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
                        marginTop: 2,
                    }}>Pet cadastrado com sucesso!
                    </Alert>
            }
        </Box>


    );
}

export default Cadastro;