/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import Footer from '.';

const renderSut = () => {
  render(<Footer />);
};

describe('Footer component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText(/socialcards/i)).toBeInTheDocument();
  });
});
