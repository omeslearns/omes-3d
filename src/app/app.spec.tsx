import { render } from '@testing-library/react';

import App from './Experience';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome omes.is/gi)).toBeTruthy();
  });
});
