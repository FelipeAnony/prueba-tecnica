import HelpMessage from '../HelpMessage';
import Styles from './styles.scss';

type Props = {
  label: string;
  helpMessage?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props) => {
  const { helpMessage, label } = props;

  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.helpMessage}>
        <label htmlFor={props.id}>{label}</label>
        {helpMessage && <HelpMessage message={helpMessage} />}
      </div>
      <input {...props} />
    </div>
  );
};

export default Input;
