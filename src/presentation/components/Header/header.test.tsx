/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockUseHeader } from '@/presentation/mocks';

import Header from '.';

jest.mock('./useHeader');

const renderSut = () => {
  render(<Header />);
};

describe('Header component', () => {
  it('Should render appropiately without any error', () => {
    const { user } = mockUseHeader();
    renderSut();

    expect(screen.getByText(/socialcards/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(user.user))).toBeInTheDocument();
  });

  it('Should call handleLogout when logout button is clicked', async () => {
    const { handleLogout } = mockUseHeader();
    renderSut();

    await userEvent.click(screen.getByRole('button', { name: /logout/i }));

    expect(handleLogout).toBeCalled();
  });
});
