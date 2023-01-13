import { render } from '@testing-library/react';

import App1Ui from './app1-ui';

describe('App1Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Ui />);
    expect(baseElement).toBeTruthy();
  });
});
