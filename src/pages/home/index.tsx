import Itens from "components/Itens";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState, useContext, useEffect, useRef } from "react";
import estilos from "./Home.module.scss";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import listaEstados from "./estados.json";
import InputAdornment from "@mui/material/InputAdornment";
import http from "../../http";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Previsao from "pages/Previsao";
import IDadosSemana from "interfaces/IDadosSemana";

interface Opcoes {
  city: string;
  city_name: string;
  currently: string;
  date: string;
  cref: number;
  description: string;
  humidity: number;
  sunrise: string;
  sunset: string;
  temp: number;
  max: number;
  index: number;
}

interface Props {
  inputCidade: string;
  inputEstado: string;
  isShown: boolean;
  setCidade: React.Dispatch<React.SetStateAction<string>>;
  setEstado: React.Dispatch<React.SetStateAction<string>>;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({
  inputCidade,
  inputEstado,
  isShown,
  setCidade,
  setEstado,
  setIsShown,
}: Props) {
  const [repositorio, setRepositorio] = useState<Opcoes[]>([]);
  const [cidades, setCidades] = useState<IDadosSemana[]>([]);

  const valores = Object.values(repositorio);
  const valoresString = valores.map(function (item, indice) {
    return item.toString();
  });

  const [brasilia, setBrasilia] = useState<Opcoes[]>([]);
  const valoresBrasilia = Object.values(brasilia);
  const valoresBrasiliaString = valoresBrasilia.map(function (item, indice) {
    return item.toString();
  });
  const nomeBrasilia = valoresBrasiliaString[7];
  const tempBrasilia = valoresBrasiliaString[0];
  const climaBrasilia = valoresBrasiliaString[4];

  const [saopaulo, setSaopaulo] = useState<Opcoes[]>([]);
  const valoresSaopaulo = Object.values(saopaulo);
  const valoresSaopauloString = valoresSaopaulo.map(function (item, indice) {
    return item.toString();
  });
  const nomeSaopaulo = valoresSaopauloString[7];
  const tempSaopaulo = valoresSaopauloString[0];
  const climaSaopaulo = valoresSaopauloString[4];

  const [rio, setRio] = useState<Opcoes[]>([]);
  const valoresRio = Object.values(rio);
  const valoresRioString = valoresRio.map(function (item, indice) {
    return item.toString();
  });
  const nomeRio = valoresRioString[7];
  const tempRio = valoresRioString[0];
  const climaRio = valoresRioString[4];

  const [salvador, setSalvador] = useState<Opcoes[]>([]);
  const valoresSalvador = Object.values(salvador);
  const valoresSalvadorString = valoresSalvador.map(function (item, indice) {
    return item.toString();
  });
  const nomeSalvador = valoresSalvadorString[7];
  const tempSalvador = valoresSalvadorString[0];
  const climaSalvador = valoresSalvadorString[4];

  const [beloHorizonte, setBeloHorizonte] = useState<Opcoes[]>([]);
  const valoresBeloHorizonte = Object.values(beloHorizonte);
  const valoresBeloHorizonteString = valoresBeloHorizonte.map(function (
    item,
    indice
  ) {
    return item.toString();
  });
  const nomeBeloHorizonte = valoresBeloHorizonteString[7];
  const tempBeloHorizonte = valoresBeloHorizonteString[0];
  const climaBeloHorizonte = valoresBeloHorizonteString[4];

  const [lista, setLista] = useState(listaEstados.UF);

  const navigate = useNavigate();

  // const [estado, setAge] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  function createData(temp: string, city: string, clima: string) {
    return { temp, city, clima };
  }

  const rows = [
    createData(`${tempBrasilia}º`, nomeBrasilia, climaBrasilia),
    createData(`${tempSaopaulo}º`, nomeSaopaulo, climaSaopaulo),
    createData(`${tempRio}º`, nomeRio, climaRio),
    createData(`${tempSalvador}º`, nomeSalvador, climaSalvador),
    createData(`${tempBeloHorizonte}º`, nomeBeloHorizonte, climaBeloHorizonte),
  ];

  useEffect(() => {
    // obter restaurantes
    http
      .get(
        `https://api.hgbrasil.com/weather?format=json-cors&key=65c54c91&city_name=${inputCidade},${inputEstado}`
      )
      .then((resposta) => {
        setBrasilia(resposta.data.results);
        console.log(brasilia);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    // obter restaurantes
    http
      .get(
        `https://api.hgbrasil.com/weather?format=json-cors&key=65c54c91&city_name=${inputCidade},${inputEstado}`
      )
      .then((resposta) => {
        setSaopaulo(resposta.data.results);
        console.log(saopaulo);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    // obter restaurantes
    http
      .get(
        `https://api.hgbrasil.com/weather?format=json-cors&key=65c54c91&city_name=${inputCidade},${inputEstado}`
      )
      .then((resposta) => {
        setRio(resposta.data.results);
        console.log(rio);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    // obter restaurantes
    http
      .get(
        `https://api.hgbrasil.com/weather?format=json-cors&key=65c54c91&city_name=${inputCidade},${inputEstado}`
      )
      .then((resposta) => {
        setSalvador(resposta.data.results);
        console.log(salvador);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  useEffect(() => {
    // obter restaurantes
    http
      .get(
        `https://api.hgbrasil.com/weather?format=json-cors&key=65c54c91&city_name=${inputCidade},${inputEstado}`
      )
      .then((resposta) => {
        setBeloHorizonte(resposta.data.results);
        console.log(beloHorizonte);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCidade(e.target.value);
  };

  const handleClick = () => {
    setIsShown(true);
  };

  return (
    <>
      <div className={estilos.corpo}>
        <h1 className={estilos.titulo}>Previsão do Tempo</h1>
        {isShown && (
          <Previsao
            inputEstado={inputEstado}
            inputCidade={inputCidade}
            isShown={isShown}
            setCidade={setCidade}
            setEstado={setEstado}
            setIsShown={setIsShown}
          />
        )}
        <div className={estilos.container}>
          <Box
            className={estilos.form}
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 0,
                borderRadius: "0px",
                width: "100%",
              },
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
                      type="reset"
                      className={estilos.icon}
                      onClick={handleClick}
                    />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handleChange(e)}
            />
            <div className={estilos.estado}>
              <FormControl variant="filled" sx={{ m: 0, minWidth: 90 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Estado
                </InputLabel>
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
          </Box>
        </div>
        <div className={estilos.divisa}></div>
        <div className={estilos.capitais}>
          <h1>Capitais</h1>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 380 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Temp</TableCell>
                  <TableCell align="center">Cidade</TableCell>
                  <TableCell align="center">Clima</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.temp}
                    </TableCell>
                    <TableCell align="center">{item.city}</TableCell>
                    <TableCell align="center">{item.clima}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
