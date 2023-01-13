import { render } from '@testing-library/react';

import TotalUi from './total-ui';

describe('TotalUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TotalUi />);
    expect(baseElement).toBeTruthy();
  });
});
