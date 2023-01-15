import { render } from '@testing-library/react'

import App2Ui from './app2-ui'

describe('App2Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Ui />)
    expect(baseElement).toBeTruthy()
  })
})
