import { Box, TextField } from "@mui/material";
import Button from "../Componentes/Button"


export default function CadastroPageFunction() {
    return (
        <div>
           <Box sx={{ p: 5,display: 'flex', flexDirection: 'column', gap: 5, background:"white" }}>
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="filled-basic" label="CPF" variant="outlined" />
                <TextField id="standard-basic" label="Telefone" variant="outlined" />

                <Button onClick={() => {}} texto='Faz Post' />
            </Box>
        </div>
    );
}