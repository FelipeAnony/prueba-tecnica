/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import { ErrorMessage } from '@/presentation/components';

const renderSut = () => {
  render(<ErrorMessage error="any-error" />);
};

describe('ErrorMessage component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText('any-error')).toBeInTheDocument();
  });
});
