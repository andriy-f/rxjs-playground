import { range } from 'rxjs'

export const add = (a: number, b: number) => {
  return a + b
}

export const testrange = (nextCb: (i: number) => void, errCb: (error: any) => void, completeCb: () => void) => {
  const source = range(1, 10)
  source.subscribe({
    complete: completeCb,
    error: errCb,
    next: nextCb,
  })
}
