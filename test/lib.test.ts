import { add, testrange } from '../src/lib'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('test rxjs range', (done) => {
  const vals: number[] = []
  const nextCb = (val: number) => vals.push(val)
  const errCb = (err: any) => { done(err) }
  const completeCb = () => {
    expect(vals).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    done()
  }

  testrange(nextCb, errCb, completeCb)
})
