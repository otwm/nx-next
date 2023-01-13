import styled from '@emotion/styled';
import {Kim} from '@nx-next/types';
import {getA} from '@nx-next/utils'

/* eslint-disable-next-line */
export interface ComComponentProps {}

const StyledComComponent = styled.div`
  color: pink;
`;

export function ComComponent(props: ComComponentProps) {
  const kim: Kim = { kimProp1: 'true' }
  return (
    <StyledComComponent>
      <h1>Welcome to ComComponent! {kim.kimProp1} {getA()}</h1>
    </StyledComComponent>
  );
}

export default ComComponent;
