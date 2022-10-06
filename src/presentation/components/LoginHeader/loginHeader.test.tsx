/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import LoginHeader from '.';

const renderSut = () => render(<LoginHeader />);

describe('Login Header component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText(/socialcards/i)).toBeInTheDocument();
  });
});
