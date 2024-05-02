import basic from "./basic"
import typescript from "./typescript"
import vue from "./vue"
import react from "./react"

export default function igorjacauna(overrides: unknown[] = []) {
  return [
    ...basic(),
    ...typescript(),
    ...overrides,
  ]
}