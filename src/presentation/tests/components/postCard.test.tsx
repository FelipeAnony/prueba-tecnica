/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mockUsePostCard } from '@/presentation/mocks';
import { PostCard } from '@/presentation/components';

jest.mock('@/presentation/hooks/usePostCard');
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

const props = {
  body: 'any-body',
  id: 1,
  title: 'any-title',
  userId: 'any-user-id',
};

const renderSut = () => render(<PostCard {...props} />);

describe('Modal component', () => {
  it('Should render appropiately without any error', () => {
    mockUsePostCard();
    renderSut();
    expect(screen.getByText(props.body)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(props.userId))).toBeInTheDocument();
  });

  it('Should calls handleLikeClick when user clicks on like button', async () => {
    const { handleLikeClick } = mockUsePostCard();
    renderSut();
    await userEvent.click(screen.getByTestId('heartContainer'));
    expect(handleLikeClick).toBeCalled();
  });

  it('Should calls openDeleteModal when user clicks on delete button', async () => {
    const { openDeleteModal } = mockUsePostCard();
    renderSut();
    await userEvent.click(screen.getByTestId('deleteIcon'));
    expect(openDeleteModal).toBeCalled();
  });

  it('Should calls openEditModal when user clicks on edit button', async () => {
    const { openEditModal } = mockUsePostCard();
    renderSut();
    await userEvent.click(screen.getByTestId('editIcon'));
    expect(openEditModal).toBeCalled();
  });

  it('Should render modal when modalisOpen state is true', () => {
    mockUsePostCard(true);
    renderSut();
    expect(screen.getByTestId('modalOutContainer')).toBeInTheDocument();
  });

  it('Should not render modal when modalisOpen state is false', () => {
    mockUsePostCard(false);
    renderSut();
    expect(screen.queryByTestId('modalOutContainer')).not.toBeInTheDocument();
  });
});
