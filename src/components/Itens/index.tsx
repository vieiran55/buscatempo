import IDadosSemana from "interfaces/IDadosSemana";
import IDados from "interfaces/IDadosSemana";
import { memo } from "react";
import estilos from "./Item.module.scss";

function Item(props: IDadosSemana) {

  const {date, description, max, min, rain_probability, wind_speedy, weekday} = props;

  return(
    <>
      <div className={estilos.previsao}>
        <div>data: {date} </div>
        <div>dia da semana: {weekday} </div>
        <div>Clima: {description} </div>
        <div>Minima: {min} </div>
        <div>Maxima: {max} </div>
        <div>Chace de chuva: {rain_probability}% </div>
        <div>Força do Vento: {wind_speedy} </div>
      </div>
    </>
  );
}

export default memo(Item);