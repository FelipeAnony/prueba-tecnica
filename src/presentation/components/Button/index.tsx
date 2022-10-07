import Styles from './styles.scss';

type Props = {
  onClick: () => void;
  style?: 'default' | 'outline' | 'clear' | 'disabled';
  disabled?: boolean;
  children: string | JSX.Element;
};

export const Button: React.FC<Props> = ({
  children,
  onClick,
  style,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={Styles[style || 'default']}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
