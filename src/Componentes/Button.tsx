import { Button } from "@mui/material";


interface ButtonsProps {
    onClick: () => void;
    texto: string;

  }
  
  export default function ComponentButton({onClick, texto }: ButtonsProps) {
    return (
      
      <Button sx={{background:"#0A73FC",textTransform: "none"}} variant="contained" onClick={onClick}>{texto}</Button>
  
    );
  }
  