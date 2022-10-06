/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '.';

const onChange = jest.fn(() => {});

const renderSut = () => {
  render(
    <Input
      label="any-label"
      placeholder="any-placeholder"
      onChange={onChange}
    />
  );
};

describe('Login Header component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText('any-label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('any-placeholder')).toBeInTheDocument();
  });

  it('Should call onChange function when user Types', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toBeCalled();
  });
});
