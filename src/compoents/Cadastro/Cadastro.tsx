import { TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineSend } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import doguito from "../../assets/doguito.svg"
import "./Cadastro.css"
import { ITipo } from "../../Interfaces/tipo";
import axios from "axios";
import { IRaca } from "../../Interfaces/raca";
import TituloPadras from "../TituloPadras/TituloPadras";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../Interfaces/IAnimal";



function Cadastro() {
    const parametros = useParams()
    const auth = useContext(AuthContext);
    //console.log(`nome: ${auth.user}/ token: ${auth.userToken}/ tipo token: ${auth.tipoToken}` )
    const token = auth.userToken
    const tipoToken = auth.tipoToken

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

    // Imagem. Ver...
    const [image, setImage] = useState<File | null>()
    const [preview, setPreview] = useState<string | null | any>()



    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImage(evento.target.files[0])
        } else {
            setImage(null)
        }
    } 

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image])

    //Get auto complete de tipo e raca

    useEffect(() => {
        axios.get<ITipo[]>(`http://localhost:8080/api/v1/tipo`)
            .then(resposta => setTipos(resposta.data))

        axios.get<IRaca[]>(`http://localhost:8080/api/v1/raca`)
            .then(resposta => setRacas(resposta.data))



        setPortes(["Pequeno", "Médio", "Grande"])

    }, [])


    useEffect(() => {
        if (parametros.id) {
            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setSexoDoAnimal(resposta.data.sexo))

            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setNome(resposta.data.nome))
            console.log(nome)

            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setTipo(resposta.data.tipo.nome))
            console.log(tipo)

            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setRaca(resposta.data.raca.nome))

            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setPorte(resposta.data.porte))

            axios.get<IAnimal>(`http://localhost:8080/api/v1/pet/${parametros.id}/`)
                .then(resposta => setIdade(resposta.data.idade))
        }

    }, [parametros])




    // Map para o autocomplete de tipo e raca
    const tiposAutoComplete: string[] = tipos.map(tiposMapped => {
        return tiposMapped.nome
    })

    const racasAutoComplete: string[] = racas.map(racasMapped => {
        return racasMapped.nome
    })



    function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        const petObject = {
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
            userId: auth.userId,
            userName: auth.user
        }
        const json = JSON.stringify(petObject);
        const blob = new Blob([json], {
        type: 'application/json'
    });

        const formDataPet: any = new FormData();
        formDataPet.append("DTO", blob)
        
        if (image) {
        formDataPet.append("file", image)
        }

        if (parametros.id) {

            axios.request({
                url: `http://localhost:8080/api/v1/pet/${parametros.id}/`,
                method: 'PATCH',
                headers: {
                    'Authorization': `${tipoToken} ${token}`
                },
                data: formDataPet
            })
                    .then(() => {
                    setNome('')
                    setTipos([])
                    setRacas([])
                    setPortes([])
                    setIdade('')
                })

        } else {
            axios.request({
                url: 'http://localhost:8080/api/v1/pet',
                method: 'POST',
                headers: {
                    'Authorization': `${tipoToken} ${token}`
                },
                data: formDataPet
            })
                    .then(() => {
                    setNome('')
                    setTipos([])
                    setRacas([])
                    setPortes([])
                    setIdade('')
                })
        }

        setActive(true)
        setTimeout(() => setActive(false), 5000)
    }


    


    return (
        <Box component="form" onSubmit={aoEnviar} className="cadastroWrapper" sx={{ height: 700 }}>



            <TituloPadras texto={parametros.id ? 'Atualize seu Pet' : 'Cadastre seu Pet'} />


            <label htmlFor="file-upload" className="inputDeImagem">
                <div>
                    {preview ? (<img className="imagePreview" src={preview} />) 
                             : (<img className="imagePreview" src={doguito} />)}
                </div>

                <div>
                    <input className="inputDeImagem"
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            const file: any = event.target.files![0];
                            if (file) {
                                setImage(file)
                            } else {
                                setImage(null)
                            }
                        }} />
                    Selecione uma imagem <IoImageOutline size={30}  className='imagePreviewIcon'/>
                </div>
            </label>



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
                    value={tipo}
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
                    }}>{parametros.id ? 'Pet atualizado com sucesso!' : 'Pet cadastrado com sucesso!'}
                    </Alert>
            }
        </Box>


    );
}

export default Cadastro;