import './styles.scss';

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return <div className={'errorMessage'}>{error}</div>;
};

export default ErrorMessage;
