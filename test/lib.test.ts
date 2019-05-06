import { add, rangesample } from '../src/lib'

test('adds 1 + 2 to equal 3', (): void => {
  expect(add(1, 2)).toBe(3)
})

test('test rxjs range', (done): void => {
  const vals: number[] = []

  rangesample().subscribe({
    next: (val): void => { vals.push(val) },
    error: (err): void => { done(err) },
    complete: (): void => {
      expect(vals).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      done()
    }
  })
})
