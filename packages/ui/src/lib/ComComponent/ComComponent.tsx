import styled from '@emotion/styled'
import { Kim } from '@nx-next/types'
import { getA } from '@nx-next/utils'

const StyledComComponent = styled.div`
  color: pink;
`

export const ComComponent = () => {
  const kim: Kim = { kimProp1: 'true' }
  return (
    <StyledComComponent>
      <h1>
        Welcome to ComComponent! {kim.kimProp1} {getA()}
      </h1>
    </StyledComComponent>
  )
}

export default ComComponent
