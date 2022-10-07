import Styles from './styles.scss';

type Props = {
  onClick: () => void;
  style?: 'default' | 'outline' | 'clear';
  children: string | JSX.Element;
};

export const Button: React.FC<Props> = ({ children, onClick, style }) => {
  return (
    <button className={Styles[style || 'default']} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
