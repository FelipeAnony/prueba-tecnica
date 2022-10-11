/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import LogoSpinner from '.';

const renderSut = () => render(<LogoSpinner />);

describe('LogoSpinner component', () => {
  it('Should render appropiately without any error', () => {
    renderSut();
    expect(screen.getByText(/socialcards/i)).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
