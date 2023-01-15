import { render } from '@testing-library/react'

import ComComponent from './ComComponent'

describe('ComComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComComponent />)
    expect(baseElement).toBeTruthy()
  })
})
