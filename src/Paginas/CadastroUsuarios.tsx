import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function FormPageFunction() {
    const [dados, setDados] = useState([]);
    const [novoUsuario, setNovoUsuario] = useState({
        name: "",
        email: "",
    });

    const adicionarUsuario = () => {
        const usuarioParaEnviar = {
            name: novoUsuario.name,
            email: novoUsuario.email,
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioParaEnviar),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Usuário adicionado:", data);
                setDados([...dados, data]);
            })
            .catch((err) => console.error("Erro:", err));
    };

    return (

        <div>


            <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: 5, background: "white" }}>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text"
                    value={novoUsuario.name}
                    onChange={(e) =>
                        setNovoUsuario({ ...novoUsuario, name: e.target.value })
                    }
                    className="border p-2 mr-2"
                    placeholder="Nome" />


                <TextField id="outlined-basic" label="Outlined" variant="outlined" type="email"
                    value={novoUsuario.email}
                    onChange={(e) =>
                        setNovoUsuario({ ...novoUsuario, email: e.target.value })
                    }
                    className="border p-2 mr-2"
                    placeholder="Email" />


                <Button variant="contained" onClick={adicionarUsuario}>
                    Enviar
                </Button>


                <ul>
                    {dados.map((user, index) => (
                        <li key={index}>{user.name} - {user.email}</li>
                    ))}
                </ul>


            </Box>
        </div>


    );
}