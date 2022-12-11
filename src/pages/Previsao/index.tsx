import { memo, useEffect, useState } from "react";
import http from "../../http";
import IClima from "interfaces/IClima";
import IDados from "interfaces/IDadosSemana";
import Item from "components/Itens";
import IDadosSemana from "interfaces/IDadosSemana";
import Itens from "components/Itens";

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

  const valores = Object.values(repositorio);
  const valoresString = valores.map(function (item, indice) {
    return item.toString();
  });

  const temp = valoresString[0];
  const clima = valoresString[4];
  const sensacao = valoresString[5];
  const nomeCidade = valoresString[7];
  const humidade = valoresString[9];
  const vento = valoresString[12];

  // useEffect(() => {
  //   // obter restaurantes
  //   http.get(`${inputCidade},${inputEstado}`)
  //     .then(resposta => {
  //       console.log(resposta);
  //       setRepositorio(resposta.data.results);
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
        <div>
          <h1>{nomeCidade}</h1>
          <p>{temp}ºC</p>
          <p>{clima}</p>
          <p>{sensacao}º</p>
          <p>{humidade}%</p>
          <p>Vento {vento}</p>
        </div>
        <div>
          {cidades.map((item, index) => (
            <Itens key={index} {...item} />
          ))}
        </div>
        <button
          onClick={() =>
            console.log(repositorio)
          }
        >
          teste
        </button>
      </div>
    </>
  );
}

export default memo(Previsao);
