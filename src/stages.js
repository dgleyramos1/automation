import { address } from "./stages/address.js"
import { cardapio } from "./stages/cardapio.js"
import { carrinho } from "./stages/carrinho.js"
import { initial } from "./stages/initial.js"
import { menu } from "./stages/menu.js"
import { artesanais } from "./stages/produtos/artesanais.js"
import { pao } from "./stages/produtos/secundary/pao.js"
import { resumo } from "./stages/resumo.js"
import { storage } from "./storage.js"

export const stages = [
  {
    description: "Welcome",
    stage: initial
  },
  {
    description: "Menu",
    stage: menu
  },
  {
    description: "Cardápio",
    stage: cardapio
  },
  {
    description: "Artesanais",
    stage: artesanais
  },
  {
    description: 'Escolher quais pães',
    stage: pao
  },
  {
    description: 'Carrinho',
    stage: carrinho
  },
  {
    description: 'Endereço',
    stage: address
  },
  {
    description: 'Resumo',
    stage: resumo
  }
]

export function getStage({ from }) {

  if (storage[from]) {
    return storage[from].stage
  }

  storage[from] = {
    stage: 0,
    name: '',
    phone: '',
    itens: [],
    address: '',
    payment: '',
    total: 0
  }

  return storage[from].stage
}
