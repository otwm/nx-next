import styled from '@emotion/styled';
import { FooComponent } from '@nx-next/app1-ui'
import {getA} from '@nx-next/utils'

/* eslint-disable-next-line */
export interface FooPageProps {}

const StyledFooPage = styled.div`
  color: pink;
`;

export function FooPage(props: FooPageProps) {
  return (
    <StyledFooPage>
      <h1>Welcome to FooPage! {getA()}</h1>
      <FooComponent />
    </StyledFooPage>
  );
}

export default FooPage;
