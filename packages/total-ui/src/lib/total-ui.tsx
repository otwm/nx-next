import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TotalUiProps {}

const StyledTotalUi = styled.div`
  color: pink;
`;

export function TotalUi(props: TotalUiProps) {
  return (
    <StyledTotalUi>
      <h1>Welcome to TotalUi!</h1>
    </StyledTotalUi>
  );
}

export default TotalUi;
