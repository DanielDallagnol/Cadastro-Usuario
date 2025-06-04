import { Alert, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"; // Importação que estava faltando
import { useEffect, useState } from "react";

export default function VisualizarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("usuarios");
        if (dadosSalvos) {
            setUsuarios(JSON.parse(dadosSalvos));
        }
    }, []);

    return (
        <div>
            <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: 5, background: "white" }}>
                <h1>Usuários Cadastrados</h1>


                <Alert

                    severity="info"
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1, // espaçamento entre os itens
                    }}
                >
                    {usuarios.map((user, index) => (
                        <div key={index}>
                            {user.name} - {user.email}
                        </div>
                    ))}
                </Alert>

            </Box>
        </div>
    );
}
