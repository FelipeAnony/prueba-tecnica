import { useHeader } from '../components/Header/useHeader';

const mockedUseHeader = useHeader as jest.MockedFn<typeof useHeader>;

export const mockUseHeader = () => {
  const handleLogout = jest.fn(() => {});
  const user = { user: 'any-user' };
  mockedUseHeader.mockReturnValueOnce({ user, handleLogout });

  return {
    handleLogout,
    user,
  };
};
