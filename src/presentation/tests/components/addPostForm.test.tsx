/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { mockUseAddPostForm } from '@/presentation/mocks';
import { AddPostForm } from '@/presentation/components';

jest.mock('@/presentation/hooks/useAddPostForm');
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
  render(<AddPostForm />);
};

describe('AddPostForm component', () => {
  it('Should render appropiately without any error', () => {
    mockUseAddPostForm();
    renderSut();

    expect(screen.getByText(/add new post/i)).toBeInTheDocument();
    expect(screen.getByTestId('openButton')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', { name: /message/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should calls handleChange when user types on inputs', async () => {
    const { handleChange } = mockUseAddPostForm();
    renderSut();

    await userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'a');
    await userEvent.type(
      screen.getByRole('textbox', { name: /message/i }),
      'a'
    );

    expect(handleChange).toBeCalledTimes(2);
  });

  it('Should calls handleOpenClick when user clicks on open button', async () => {
    const { handleOpenClick } = mockUseAddPostForm();
    renderSut();

    await userEvent.click(screen.getByTestId('openButton'));

    expect(handleOpenClick).toBeCalled();
  });

  it('Should not calls handleAddPost if any formData fields is empty', async () => {
    const { handleAddPost, formData } = mockUseAddPostForm({
      title: '',
      body: '',
    });
    renderSut();

    await userEvent.click(screen.getByRole('button'));

    expect(handleAddPost).not.toBeCalled();
  });

  it('Should calls handleAddPost with correct param when user clicks on add post button', async () => {
    const { handleAddPost, formData } = mockUseAddPostForm();
    renderSut();

    await userEvent.click(screen.getByRole('button'));

    expect(handleAddPost).toBeCalledWith({
      title: formData.title,
      body: formData.body,
      userId: '',
      id: 0,
    });
  });
});
