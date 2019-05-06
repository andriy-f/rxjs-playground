import { add, rangesample, mergeMapSample, takeUntilSample } from '../src/lib'

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

test('test rxjs mergeMap', (done): void => {
  const vals: string[] = []

  mergeMapSample().subscribe({
    next: (val): void => { vals.push(val) },
    error: (err): void => { done(err) },
    complete: (): void => {
      expect(vals).toStrictEqual(['a', 'b', 'c'])
      done()
    }
  })
})

test('test rxjs takeUntil', (done): void => {
  const vals: string[] = []

  takeUntilSample().subscribe({
    next: (val): void => { vals.push(val) },
    error: (err): void => { done(err) },
    complete: (): void => {
      expect(vals).toStrictEqual([
        'Even number (1) : 0',
        'Even number (2) : 2',
        'Even number (3) : 4',
        'Even number (4) : 6',
        'Even number (5) : 8',
      ])
      done()
    }
  })
})
