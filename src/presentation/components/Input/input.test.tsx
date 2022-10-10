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
      id="any-id"
      name="any-name"
      type="text"
      label="any-label"
      placeholder="any-placeholder"
      helpMessage="any-help-message"
      onChange={onChange}
    />
  );
};

describe('Input component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText('any-label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('any-placeholder')).toBeInTheDocument();
    expect(screen.getByTitle('any-help-message')).toBeInTheDocument();
  });

  it('Should call onChange function when user Types', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toBeCalled();
  });
});
