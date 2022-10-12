import { useLoginForm } from '@/presentation/hooks';

const mockedUseLoginForm = useLoginForm as jest.MockedFn<typeof useLoginForm>;

type Params = {
  loginData?: { email: string; password: string };
  buttonIsDisabled?: boolean;
  error?: Error | null;
};

const loginDataDefault = { email: '', password: '' };

export const mockUseLoginForm = ({
  loginData = loginDataDefault,
  buttonIsDisabled = true,
  error = null,
}: Params) => {
  const handleChange = jest.fn(() => {});
  const handleSubmit = jest.fn(async () => {});

  mockedUseLoginForm.mockReturnValueOnce({
    loginData,
    buttonIsDisabled,
    error,
    handleChange,
    handleSubmit,
  });

  return {
    handleChange,
    handleSubmit,
    loginData,
    buttonIsDisabled,
    error,
  };
};
