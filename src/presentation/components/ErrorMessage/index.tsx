import Styles from './styles.scss';

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return <div className={Styles.error}>{error}</div>;
};

export default ErrorMessage;
