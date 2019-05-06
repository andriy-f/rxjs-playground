import { add, testrange } from '../src/lib'

test('adds 1 + 2 to equal 3', (): void => {
  expect(add(1, 2)).toBe(3)
})

test('test rxjs range', (done): void => {
  const vals: number[] = []
  const nextCb = (val: number): void => { vals.push(val) }
  const errCb = (err: any): void => { done(err) } // eslint-disable-line @typescript-eslint/no-explicit-any
  const completeCb = (): void => {
    expect(vals).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])
    done()
  }

  testrange(nextCb, errCb, completeCb)
})
