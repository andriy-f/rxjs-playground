// Test if node can run it

import { rangesample } from './lib'

console.log('Rangesample:')

const obs = rangesample()
obs.subscribe({
  next: (value): void => console.log('range obs next', value),
  complete: (): void => console.log('range obs complete'),
  error: (err): void => console.error('range obs error', err)
})
