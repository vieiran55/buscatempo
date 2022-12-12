import { memo, useEffect, useState } from "react";
import http from "../../http";
import IClima from "interfaces/IClima";
import IDados from "interfaces/IDadosSemana";
import Item from "components/Itens";
import IDadosSemana from "interfaces/IDadosSemana";
import Itens from "components/Itens";
import estilos from "./Previsao.module.scss";
import { GrFormClose } from "react-icons/gr";

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
}

function Previsao(props: Props) {
  const { inputCidade, inputEstado } = props;

  const [cidades, setCidades] = useState<IDadosSemana[]>([]);
  const [repositorio, setRepositorio] = useState<Opcoes[]>([]);

  const [isShown, setIsShown] = useState(true);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(false);
  };

  const valores = Object.values(repositorio);

  const fiveDays = cidades.slice(0, 5);

  const valoresString = valores.map(function (item, indice) {
    return item.toString();
  });

  console.log(valoresString);

  const temp = valoresString[0];
  const clima = valoresString[4];
  const sensacao = valoresString[5];
  const nomeCidade = valoresString[7];
  const humidade = valoresString[9];
  const vento = valoresString[12];

  useEffect(() => {
    // obter cidade
    http
      .get(`${inputCidade},${inputEstado}`)
      .then((resposta) => {
        setRepositorio(resposta.data.results);
        setCidades(resposta.data.results.forecast);
        console.log(cidades);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  // useEffect(() => {
  //   // obter restaurantes
  //   http.get("Planaltina,GO")
  //     .then(resposta => {
  //       setCidades(resposta.data.results.forecast);
  //       console.log(cidades);
  //     })
  //     .catch(erro => {
  //       console.log(erro);
  //     });
  // }, []);

  // useEffect(() => {
  //   // obter restaurantes
  //   http.get("Planaltina,GO")
  //     .then(resposta => {
  //       setRepositorio(resposta.data.results);
  //       console.log(repositorio);
  //     })
  //     .catch(erro => {
  //       console.log(erro);
  //     });
  // }, []);

  console.log(cidades);
  return (
    <>
      <div>
        <div className={estilos.previsao}>
          <div className={estilos.headerConteiner}>
            <h1 className={estilos.cidade}>{nomeCidade}</h1>
            <GrFormClose className={estilos.close} onClick={handleClick} />
          </div>
          <div className={estilos.cabecalho}>
            <p className={estilos.cabecalho__temp}>{temp}ºC</p>
            <p className={estilos.cabecalho__clima}>{clima}</p>
          </div>
          <div className={estilos.dados}>
            <p className={estilos.dados__humidade}>
              Humidade <b>{humidade}%</b>
            </p>
            <p className={estilos.dados__vento}>
              Vento <b>{vento}</b>
            </p>
          </div>
          <div className={estilos.divisa}></div>
          <div className={estilos.item}>
            {fiveDays.map((item, index) => (
              <Itens key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Previsao);