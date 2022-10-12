import { useEditPostForm } from '@/presentation/hooks';

const mockedUseEditPostForm = useEditPostForm as jest.MockedFn<
  typeof useEditPostForm
>;

export const mockUseEditPostForm = () => {
  const handleChange = jest.fn(() => {});
  mockedUseEditPostForm.mockReturnValueOnce({
    formData: { body: 'any-body', title: 'any-title' },
    handleChange,
  });

  return { handleChange };
};
