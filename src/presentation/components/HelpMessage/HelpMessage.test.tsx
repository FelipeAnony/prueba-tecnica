/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import HelpMessage from '.';

const renderSut = () => {
  render(<HelpMessage message="any-help-message" />);
};

describe('HelpMessage component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByTitle('any-help-message')).toBeInTheDocument();
  });
});
