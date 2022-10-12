/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import ChangeLanguageBtn from '.';

const mockChangeLanguagefn = jest.fn(
  (language: string) => new Promise(() => {})
);

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: mockChangeLanguagefn,
      },
    };
  },
}));

const renderSut = () => {
  render(<ChangeLanguageBtn />);
};

describe('ChangeLanguageBtn component', () => {
  it('Should render appropiately without any error', () => {
    renderSut();

    expect(screen.getByRole('button', { name: /en/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /es/i })).toBeInTheDocument();
  });

  it('Should calls changeLanguage method with correct param when user clicks on languages buttons', async () => {
    renderSut();

    await userEvent.click(screen.getByRole('button', { name: /en/i }));
    expect(mockChangeLanguagefn).toBeCalledWith('en');

    await userEvent.click(screen.getByRole('button', { name: /es/i }));
    expect(mockChangeLanguagefn).toBeCalledWith('es');
  });
});
