import styled from '@emotion/styled'
import { ComComponent } from '@nx-next/ui'
import { Bar } from '@nx-next/types'
import { getA } from '@nx-next/utils'

const StyledBarComponent = styled.div`
  color: pink;
`

export const BarComponent = () => {
  const bar: Bar = { barProp1: true }
  return (
    <StyledBarComponent>
      <h1>
        Welcome to BarComponent! {bar.barProp1 ? 'bar' : 'foo'} {getA()}
      </h1>
      <ComComponent />
    </StyledBarComponent>
  )
}

export default BarComponent
