import { PostModel } from '@/domain/models';
import { useAddPostForm } from '../components/AddPostForm/useAddPostForm';

const mockedUseAddPostForm = useAddPostForm as jest.MockedFn<
  typeof useAddPostForm
>;

const formDataMock = { title: 'any-title', body: 'any-body' };

export const mockUseAddPostForm = (formData = formDataMock) => {
  const handleAddPost = jest.fn((post: PostModel) => {});
  const handleChange = jest.fn(() => {});
  const handleOpenClick = jest.fn(() => {});

  mockedUseAddPostForm.mockReturnValueOnce({
    formData,
    isOpen: true,
    handleAddPost,
    handleChange,
    handleOpenClick,
    postsList: [],
  });

  return { handleAddPost, handleChange, handleOpenClick, formData };
};
