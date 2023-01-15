import styled from '@emotion/styled'
import { BarComponent } from '@nx-next/app2-ui'
import { getA } from '@nx-next/utils'

const StyledBarPage = styled.div`
  color: pink;
`

export const BarPage = () => {
  return (
    <StyledBarPage>
      <h1>Welcome to BarPage! {getA()}</h1>
      <BarComponent />
    </StyledBarPage>
  )
}

export default BarPage
