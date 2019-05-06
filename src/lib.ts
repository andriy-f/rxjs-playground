import { range, Observable } from 'rxjs'

export const add = (a: number, b: number): number => {
  return a + b
}

export const rangesample = (): Observable<number> => {
  return range(1, 10)
}
