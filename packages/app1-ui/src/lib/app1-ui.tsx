import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface App1UiProps {}

const StyledApp1Ui = styled.div`
  color: pink;
`;

export function App1Ui(props: App1UiProps) {
  return (
    <StyledApp1Ui>
      <h1>Welcome to App1Ui!</h1>
    </StyledApp1Ui>
  );
}

export default App1Ui;
