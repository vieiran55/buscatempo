import IDadosSemana from "interfaces/IDadosSemana";
import IDados from "interfaces/IDadosSemana";
import { memo } from "react";
import estilos from "./Item.module.scss";

function Item(props: IDadosSemana) {
  const {
    date,
    description,
    max,
    min,
    rain_probability,
    wind_speedy,
    weekday,
  } = props;

  return (
    <div className={estilos.previsao}>
      <p>{weekday} </p>
      <div className={estilos.previsao__minmax}>
        <p> {min}º </p>
        <p> {max}º </p>
      </div>
    </div>
  );
}

export default memo(Item);
