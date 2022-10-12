/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { LogoSpinner } from '@/presentation/components';

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

const renderSut = () => render(<LogoSpinner />);

describe('LogoSpinner component', () => {
  it('Should render appropiately without any error', () => {
    renderSut();
    expect(screen.getByText(/socialcards/i)).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
