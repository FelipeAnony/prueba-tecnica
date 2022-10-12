/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DeleteConfirmation from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const deleteFn = jest.fn(() => {});
const cancelDeleteFn = jest.fn(() => {});

const renderSut = () => {
  render(
    <DeleteConfirmation
      deleteFn={deleteFn}
      cancelDeleteFn={cancelDeleteFn}
      name="any-name"
    />
  );
};

describe('DeleteConfirmation component', () => {
  it('Should render appropiately without any error', () => {
    renderSut();

    expect(screen.getByText(/any-name/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /no, cancel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /yes, delete/i })
    ).toBeInTheDocument();
  });

  it('Should call cancelDeleteFn when user clicks cancel button', async () => {
    renderSut();
    await userEvent.click(screen.getByRole('button', { name: /no, cancel/i }));
    expect(cancelDeleteFn).toBeCalled();
  });

  it('Should call deleteFn when user clicks delete button', async () => {
    renderSut();
    await userEvent.click(screen.getByRole('button', { name: /yes, delete/i }));
    expect(deleteFn).toBeCalled();
  });
});
