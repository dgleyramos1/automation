import { initial } from "./stages/initial.js"
import { storage } from "./storage.js"

export const stages = [
  {
    description: "Welcome",
    stage: initial
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
