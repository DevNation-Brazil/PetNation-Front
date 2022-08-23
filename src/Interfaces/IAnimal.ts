import { IRaca } from "./raca"
import { ITipo } from "./tipo"

export interface IAnimal {
  id: number
  nome: string
  idade:string
  sexo: string
  porte: string
  raca: IRaca
  tipo: ITipo
  }