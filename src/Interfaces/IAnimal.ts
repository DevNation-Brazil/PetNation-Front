import { IRaca } from "./raca"
import { ITipo } from "./tipo"

export interface IAnimal {
  id: string | undefined
  imageSource: string | undefined
  nome: string
  sexo: string
  porte: string
  raca: IRaca
  tipo: ITipo
  userId: string | undefined
  idade:string
  userName?: string
  }