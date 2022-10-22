import { useForm } from '../hooks';

const mockedUseEditPostForm = useForm as jest.MockedFn<
  typeof useForm<{ body: string; title: string }>
>;

export const mockUseEditPostForm = () => {
  const handleChange = jest.fn(() => {});
  mockedUseEditPostForm.mockReturnValueOnce([
    { body: 'any-body', title: 'any-title' },
    handleChange,
    () => null,
  ]);

  return { handleChange };
};
