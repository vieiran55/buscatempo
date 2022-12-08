import Itens from "components/Itens";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useContext } from "react";
import estilos from "./Home.module.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import listaEstados from "./estados.json";
import InputAdornment from "@mui/material/InputAdornment";

interface Props {
  inputCidade: string;
  inputEstado: string;
  setCidade: React.Dispatch<React.SetStateAction<string>>;
  setEstado: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home({
  inputCidade,
  inputEstado,
  setCidade,
  setEstado,
}: Props) {
  const [lista, setLista] = useState(listaEstados.UF);

  const navigate = useNavigate();

  // const [estado, setAge] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <>
      <div className={estilos.corpo}>
        <h1 className={estilos.titulo}>Previsão do Tempo</h1>
        <div className={estilos.container}>
          <Box
            className={estilos.form}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0, width: "50em", borderRadius: "0px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className={estilos.pesquisa}
              id="standard-basic"
              label="Insira aqui o nome da cidade"
              type="text"
              variant="filled"
              value={inputCidade}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BsSearch
                      type="submit"
                      className={estilos.icon}
                      onClick={() => navigate("/previsao")}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setCidade(e.target.value)}
            />
            <div className={estilos.estado}>
              <FormControl variant="filled" sx={{ m: 0, minWidth: 90 }}>
                <InputLabel id="demo-simple-select-filled-label">Estado</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={inputEstado}
                  label="estado"
                  sx={{ borderRadius: "0px" }}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <MenuItem value="AC">AC</MenuItem>
                  <MenuItem value="AL">AL</MenuItem>
                  <MenuItem value="AP">AP</MenuItem>
                  <MenuItem value="AM">AM</MenuItem>
                  <MenuItem value="BA">BA</MenuItem>
                  <MenuItem value="CE">CE</MenuItem>
                  <MenuItem value="DF">DF</MenuItem>
                  <MenuItem value="ES">ES</MenuItem>
                  <MenuItem value="GO">GO</MenuItem>
                  <MenuItem value="MA">MA</MenuItem>
                  <MenuItem value="TO">TO</MenuItem>
                  <MenuItem value="MT">MT</MenuItem>
                  <MenuItem value="MS">MS</MenuItem>
                  <MenuItem value="MG">MG</MenuItem>
                  <MenuItem value="PA">PA</MenuItem>
                  <MenuItem value="PB">PB</MenuItem>
                  <MenuItem value="PR">PR</MenuItem>
                  <MenuItem value="PE">PE</MenuItem>
                  <MenuItem value="PI">PI</MenuItem>
                  <MenuItem value="RJ">RJ</MenuItem>
                  <MenuItem value="RN">RN</MenuItem>
                  <MenuItem value="RS">RO</MenuItem>
                  <MenuItem value="RR">RR</MenuItem>
                  <MenuItem value="SC">SC</MenuItem>
                  <MenuItem value="SP">SP</MenuItem>
                  <MenuItem value="SE">SE</MenuItem>
                  <MenuItem value="TO">TO</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* <BsSearch
              type="submit"
              className={estilos.icon}
              onClick={() => navigate("/previsao")}
            /> */}
          </Box>
        </div>
      </div>
    </>
  );
}
