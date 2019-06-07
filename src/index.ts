// Test if node can run it

import { rangesample } from './lib'

console.log('Rangesample:')

const obs = rangesample()
obs.subscribe({
  next: (value) => console.log('range obs next', value),
  complete: () => console.log('range obs complete'),
  error: (err) => console.error('range obs error', err)
})
