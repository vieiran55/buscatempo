import IDados from "./IDadosSemana";

/* eslint-disable semi */
export default interface IClima {
  results: {
    id: number
    city: string
    dado: IDados[]
  }
}