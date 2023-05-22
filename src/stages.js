import { initial } from "./stages/initial.js"
import { menu } from "./stages/menu.js"
import { storage } from "./storage.js"

export const stages = [
  {
    description: "Welcome",
    stage: initial
  },
  {
    description: "Menu",
    stage: menu
  }
]

export function getStage({ from }) {

  if (storage[from]) {
    return storage[from].stage
  }

  storage[from] = {
    stage: 0,
    itens: [],
    address: '',
  }

  return storage[from].stage
}
