import { render } from '@testing-library/react'

import BarComponent from './BarComponent'

describe('BarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BarComponent />)
    expect(baseElement).toBeTruthy()
  })
})
