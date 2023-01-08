import { TextField } from "@mui/material";
import React from "react";

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador ({ busca, setBusca }: Props) {
    return (
        <div>
            <TextField  
                label="Nome do Pet" 
                type="search" 
                variant="standard"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                sx={{width: 300}} />
        </div>
    );
}

export default Buscador;