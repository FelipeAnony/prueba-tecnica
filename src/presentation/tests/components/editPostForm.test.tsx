/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PostModel } from '@/domain/models';
import { EditPostForm } from '@/presentation/components';

import { mockUseEditPostForm } from '@/presentation/mocks';

jest.mock('@/presentation/hooks/useEditPostForm');
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

const editFn = jest.fn((id: number, newData: PostModel) => {});
const closeFn = jest.fn(() => {});

const props = {
  body: 'any-body',
  closeFn: closeFn,
  editFn: editFn,
  id: 1,
  title: 'any-title',
  userId: 'any-id',
};

const renderSut = () => {
  render(<EditPostForm {...props} />);
};

describe('EditPostForm component', () => {
  it('Should render appropiately without any error', () => {
    mockUseEditPostForm();
    renderSut();

    expect(screen.getByText(/Edit post/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /message/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /save changes/i })
    ).toBeInTheDocument();
  });

  it('Should call closeFn when cancel button is clicked', async () => {
    mockUseEditPostForm();
    renderSut();
    await userEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(closeFn).toBeCalled();
  });

  it('Should call editFn when save changes button is clicked', async () => {
    mockUseEditPostForm();
    renderSut();
    await userEvent.click(
      screen.getByRole('button', { name: /save changes/i })
    );
    const { id, body, title, userId } = props;

    expect(editFn).toBeCalledWith(id, { id, body, title, userId });
  });

  it('Should call handleChange when inputs changes', async () => {
    const { handleChange } = mockUseEditPostForm();
    renderSut();
    await userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'a');
    await userEvent.type(
      screen.getByRole('textbox', { name: /message/i }),
      'a'
    );

    expect(handleChange).toBeCalledTimes(2);
  });
});
