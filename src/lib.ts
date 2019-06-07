import { range, of, interval, Observable } from 'rxjs'
import { mergeMap, map, scan, filter, takeUntil, withLatestFrom } from 'rxjs/operators'

export const add = (a: number, b: number): number => a + b

export const rangesample = (): Observable<number> => range(1, 10)

export const mergeMapSample = (): Observable<string> => {
  const lettersSource = of('a', 'b', 'c')
  const lettersWithNumbersSource = lettersSource.pipe(
    mergeMap((x): Observable<string> => interval(100).pipe(map((i): string => x + i))),
  )

  const resultCount = lettersWithNumbersSource.pipe(scan<string, number>((acc): number => acc + 1, 0))
  const fiveCountCondition = resultCount.pipe(filter((val): boolean => val > 3))

  const res = lettersWithNumbersSource.pipe(takeUntil(fiveCountCondition))
  return res
}

export const takeUntilSample = (): Observable<string> => {
  //emit value every 1s
  const source = interval(100)
  //is number even?
  const isEven = (val: number): boolean => val % 2 === 0
  //only allow values that are even
  const evenSource = source.pipe(filter(isEven))
  //keep a running total of the number of even numbers out
  const evenNumberCount = evenSource.pipe(scan((acc): number => acc + 1, 0))
  //do not emit until 5 even numbers have been emitted
  const fiveEvenNumbers = evenNumberCount.pipe(filter((val): boolean => val > 5))

  const res = evenSource.pipe(
    //also give me the current even number count for display
    withLatestFrom(evenNumberCount),
    map(([val, count]): string => `Even number (${count}) : ${val}`),
    //when five even numbers have been emitted, complete source observable
    takeUntil(fiveEvenNumbers)
  )
  return res
}
