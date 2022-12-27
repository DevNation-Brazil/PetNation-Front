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
                id="outlined-search" 
                label="Search field" 
                type="search" 
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)} />
        </div>
    );
}

export default Buscador;