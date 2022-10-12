/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '.';

import { mockUseLoginForm } from '@/presentation/mocks';

jest.mock('./useLoginForm');

const renderSut = () => render(<LoginForm />);

describe('Login Form component', () => {
  it('Should render appropiately without any error', () => {
    mockUseLoginForm({});
    renderSut();

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('Should calls handleChange method when user types', async () => {
    const { handleChange } = mockUseLoginForm({});
    renderSut();

    await userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'a');
    await userEvent.type(screen.getByLabelText(/password/i), 'a');

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('Should not render error at start', () => {
    mockUseLoginForm({});
    renderSut();

    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
  });

  it('Should render error when an error exists', () => {
    mockUseLoginForm({ error: new Error('error') });
    renderSut();

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('Should disable login button if buttonIsDisabled state is true', () => {
    mockUseLoginForm({});
    renderSut();

    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('Should enable login button if buttonIsDisabled state is false', () => {
    mockUseLoginForm({ buttonIsDisabled: false });
    renderSut();

    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  it('Should calls handleSubmit method when user clicks Login button', async () => {
    const loginData = { email: 'valid@mail.com', password: '1234aA' };
    const { handleSubmit } = mockUseLoginForm({
      loginData,
      buttonIsDisabled: false,
    });
    renderSut();

    await userEvent.click(screen.getByRole('button'));

    expect(handleSubmit).toBeCalled();
  });
});
