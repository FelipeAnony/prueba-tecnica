import { useEditPostForm } from '../components/EditPostForm/useEditPostForm';

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
