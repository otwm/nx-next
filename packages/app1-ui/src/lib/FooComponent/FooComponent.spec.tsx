import { render } from '@testing-library/react';

import FooComponent from './FooComponent';

describe('FooComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooComponent />);
    expect(baseElement).toBeTruthy();
  });
});
