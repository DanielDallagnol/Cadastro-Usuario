import { Alert } from "@mui/material";
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
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="info">
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {usuarios.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </Alert>
        </div>
    );
}
