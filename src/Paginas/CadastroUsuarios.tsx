import { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function FormPageFunction() {
    const [dados, setDados] = useState([]);
    const [novoUsuario, setNovoUsuario] = useState({
        name: "",
        email: "",
    });

    // Carrega dados do localStorage ao iniciar
    useEffect(() => {
        const dadosSalvos = localStorage.getItem("usuarios");
        if (dadosSalvos) {
            setDados(JSON.parse(dadosSalvos));
        }
    }, []);

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
                const novosDados = [...dados, data];
                setDados(novosDados);
                localStorage.setItem("usuarios", JSON.stringify(novosDados));
                setNovoUsuario({ name: "", email: "" }); // limpa campos após envio
            })
            .catch((err) => console.error("Erro:", err));
    };

    return (
        <div>
            <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: 5, background: "white" }}>
                <h1>Cadastro Usuários</h1>

                <TextField
                    label="Nome"
                    variant="outlined"
                    type="text"
                    value={novoUsuario.name}
                    onChange={(e) =>
                        setNovoUsuario({ ...novoUsuario, name: e.target.value })
                    }
                    placeholder="Nome"
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={novoUsuario.email}
                    onChange={(e) =>
                        setNovoUsuario({ ...novoUsuario, email: e.target.value })
                    }
                    placeholder="Email"
                />

                <Button variant="contained" onClick={adicionarUsuario}>
                    Enviar
                </Button>

               
            </Box>
        </div>
    );
}
