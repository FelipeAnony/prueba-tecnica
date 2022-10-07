import Styles from './styles.scss';

type Props = {
  label: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props) => {
  return (
    <div className={Styles.inputContainer}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
