/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';

import { postMock } from '@/data/mocks';
import { CardsWrapper } from '@/presentation/components';
import { mockUseCardsContainer } from '@/presentation/mocks';

jest.mock('@/presentation/hooks/useCardsWrapper');
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

const renderSut = () => {
  render(<CardsWrapper />);
};

describe('CardsContainer component', () => {
  it('Should render appropiately without any error', () => {
    mockUseCardsContainer(null, [postMock]);
    renderSut();

    expect(screen.getByRole('article').childElementCount).toBe(1);
    expect(screen.getByText(postMock.title)).toBeInTheDocument();
    expect(screen.getByText(postMock.body)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(postMock.userId.toString()))
    ).toBeInTheDocument();
  });

  it('Should render error message when an error exists', () => {
    mockUseCardsContainer(new Error(), []);
    renderSut();

    expect(screen.getByText(/Error: cannot get posts/i)).toBeInTheDocument();
  });

  it('Should render spinner loading when postsToRender is empty', () => {
    mockUseCardsContainer(null, []);
    renderSut();

    expect(screen.getByRole('article').childElementCount).toBe(0);
    expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
  });

  it('Should not render spinner loading when postsToRender have content', () => {
    mockUseCardsContainer(null, [postMock]);
    renderSut();

    expect(screen.getByRole('article').childElementCount).toBe(1);
    expect(screen.queryByTestId('loadingSpinner')).not.toBeInTheDocument();
  });
});
