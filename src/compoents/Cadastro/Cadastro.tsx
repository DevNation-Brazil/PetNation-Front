import { TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, Alert, Snackbar } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineSend } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import doguito from "../../assets/doguito.svg"
import "./Cadastro.css"
import { ITipo } from "../../Interfaces/tipo";
import { IRaca } from "../../Interfaces/raca";
import TituloPadras from "../TituloPadras/TituloPadras";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auto/AuthContext";
import { useParams } from "react-router-dom";
import { validacaoNome } from "../../models/validacoes";
import Alerts from "../Alerts/Alerts";
import { useImagePreview } from "../../hooks/useImagePreview";
import { useAutoComplete } from "../../hooks/useAutoComplete";
import { useEditPetFill } from "../../hooks/useEditPetFill";
import { aoEnviarFunc } from "../../models/aoEnviarFunc";
import Botao from "../Botao/Botao";



function Cadastro() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const parametros = useParams()
    const auth = useContext(AuthContext);
    //console.log(`nome: ${auth.user}/ token: ${auth.userToken}/ tipo token: ${auth.tipoToken}` )
    const token = auth.userToken
    const tipoToken = auth.tipoToken

    // referente ao alert de confirmação de cadastro
    const [active, setActive] = useState(false)

    // referente ao alert de erro 
    const [activeError, setActiveError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const [sexoDoAnimal, setSexoDoAnimal] = useState<string>('');
    const [nome, setNome] = useState<string>('')
    const [errorNome, setErrorNome] = useState({ nome: { valido: true, texto: '' } })

    const [tipo, setTipo] = useState<any | null>('')
    const [raca, setRaca] = useState<any | null>('')
    const [porte, setPorte] = useState<any | null>('')
    const [idade, setIdade] = useState<string>('')


    const [tipos, setTipos] = useState<ITipo[]>([])
    const [racas, setRacas] = useState<IRaca[]>([])
    const [portes, setPortes] = useState<string[]>([])

    const [image, setImage] = useState<File | null | string>(null)
    const [preview, setPreview] = useState<string | null | any>()

    //Get auto complete de tipo e raca

    useAutoComplete({ setTipos, setPortes, setRacas, tipo })

    // Map para o autocomplete de tipo e raca
    const tiposAutoComplete: string[] = tipos.map(tiposMapped => {
        return tiposMapped.nome
    })

    const racasAutoComplete: string[] = racas.map(racasMapped => {
        return racasMapped.nome
    })

    useImagePreview({ image, setPreview })

    useEditPetFill({ parametros, setImage, setSexoDoAnimal, setNome, setTipo, setRaca, setPorte, setIdade })


    function aoEnviar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        
        aoEnviarFunc ({ sexoDoAnimal, nome, tipo, raca, 
            porte, idade, auth, image, errorNome, 
            parametros, tipoToken, token,
            setPreview, setSexoDoAnimal, setNome, 
            setTipo, setRaca, setPorte, setIdade, 
            setActive, setActiveError, setErrorMessage })
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
                    Selecione uma imagem <IoImageOutline size={30} className='imagePreviewIcon' />
                </div>
            </label>



            <FormControl >
                <RadioGroup
                    row
                    aria-labelledby="femeaOuMacho"
                    name="femeaOuMacho"
                    value={sexoDoAnimal}
                    onChange={(event) => setSexoDoAnimal((event.target as HTMLInputElement).value)}>

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

                error={!errorNome.nome.valido}
                helperText={errorNome.nome.texto}

                onBlur={(event) => {
                    const ehValido = validacaoNome(event.target.value)
                    setErrorNome({ nome: ehValido })
                }}
                id="nomeField"
                label="Nome"
                variant="standard"
                required
                sx={{ width: 280, marginTop: 1 }} />



            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                value={tipo}
                onChange={(event, value) => setTipo(value)}
                inputValue={tipo}
                onInputChange={(event, newInputValue) => {
                    setTipo(newInputValue);
                }}
                disablePortal
                id="tiposAutoComplete"
                options={tiposAutoComplete}
                sx={{ width: 280, marginTop: 1 }}
                renderInput={(params) => <TextField
                    {...params}
                    id="especieField"
                    label="Tipos"
                    variant="standard"
                     />}
            />



            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(event, value) => setRaca(value)}
                value={raca}
                inputValue={raca}
                onInputChange={(event, newInputValue) => {
                    setRaca(newInputValue);
                }}
                disablePortal
                id="racaAutoComplete"
                options={racasAutoComplete}
                sx={{ width: 280, marginTop: 1 }}
                renderInput={(params) => <TextField

                    {...params}
                    id="racaField"
                    value={raca}
                    label="Raça"
                    variant="standard"
                     />}
            />



            <Autocomplete
                isOptionEqualToValue={(option, value) => option.value === value.value}
                onChange={(event, value) => setPorte(value)}
                value={porte}
                inputValue={porte}
                onInputChange={(event, newInputValue) => {
                    setPorte(newInputValue);
                }}
                disablePortal
                id="porteAutoComplete"
                options={portes}
                sx={{ width: 280, marginTop: 1 }}
                renderInput={(params) => <TextField

                    {...params}
                    value={porte}
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
                sx={{ width: 280, marginTop: 1, marginBottom: 3 }} />

            <Botao 
                text="Enviar"
                width="105px"
                height="50px"
                icon={<AiOutlineSend size={20} />} />



            <Snackbar
                className='alert'
                open={active}
                autoHideDuration={6000}
                onClose={() => setActive(false)}
                sx={{
                    width: {
                        xs: 360,
                        sm: 370,
                        md: 370,
                        lg: 600,
                        xl: 600,
                    },
                    height: "5%"
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }} >

                <Alert onClose={() => setActive(false)} severity="success" sx={{ width: '100%', textAlign: "center" }}>
                    Pet cadastrado com sucesso!
                </Alert>

            </Snackbar>

            <Alerts
                active={activeError}
                setActive={setActiveError}
                severity={'error'}
                message={`${errorMessage}`}

            />

        </Box>

    );
}

export default Cadastro;