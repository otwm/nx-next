import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface App2UiProps {}

const StyledApp2Ui = styled.div`
  color: pink;
`;

export function App2Ui(props: App2UiProps) {
  return (
    <StyledApp2Ui>
      <h1>Welcome to App2Ui!</h1>
    </StyledApp2Ui>
  );
}

export default App2Ui;
