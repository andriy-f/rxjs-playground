import { range } from 'rxjs'

export const add = (a: number, b: number): number => {
  return a + b
}

export const testrange = (
  nextCb: (i: number) => void,
  errCb: (error: any) => void, // eslint-disable-line @typescript-eslint/no-explicit-any
  completeCb: () => void
): void => {
  const source = range(1, 10)
  source.subscribe({
    complete: completeCb,
    error: errCb,
    next: nextCb,
  })
}
