import { render, screen }  from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import App from '../App'

console.log(App, '__')
describe('A truthy statement', () => {
  it('should be equal to 2', () => {
     expect(1+1).toEqual(2)
  })
})


describe('Greet', () => {
  it('Render Hello World', () => {
    render(<App/>);
    screen.debug(screen.getByText('Hello World'))

  })
})
