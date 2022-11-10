import { IRaca } from "./raca"
import { ITipo } from "./tipo"

export interface IAnimal {
  id: string
  nome: string
  idade:string
  sexo: string
  porte: string
  raca: IRaca
  tipo: ITipo
  userId: string
  imageSource: string
  userName: string
  }