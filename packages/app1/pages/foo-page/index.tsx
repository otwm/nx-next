import styled from '@emotion/styled'
import { FooComponent } from '@nx-next/app1-ui'
import { getA } from '@nx-next/utils'

const StyledFooPage = styled.div`
  color: pink;
`

export const FooPage = () => {
  return (
    <StyledFooPage>
      <h1>Welcome to FooPage! {getA()}</h1>
      <FooComponent />
    </StyledFooPage>
  )
}

export default FooPage
