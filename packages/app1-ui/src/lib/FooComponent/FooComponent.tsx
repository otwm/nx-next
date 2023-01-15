import styled from '@emotion/styled'
import { ComComponent } from '@nx-next/ui'
import { Foo } from '@nx-next/types'
import { getA } from '@nx-next/utils'

const StyledFooComponent = styled.div`
  color: pink;
`

export const FooComponent = () => {
  const foo: Foo = { fooProp1: 'foo' }
  return (
    <StyledFooComponent>
      <h1>
        Welcome to FooComponent! {foo.fooProp1} {getA()}
      </h1>
      <ComComponent />
    </StyledFooComponent>
  )
}

export default FooComponent
