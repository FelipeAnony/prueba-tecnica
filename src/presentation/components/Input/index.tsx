import { HelpMessage } from '../';

import './styles.scss';

type Props = {
  label: string;
  name: string;
  id: string;
  type: 'email' | 'password' | 'text';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helpMessage?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
};

const Input: React.FC<Props> = ({
  id,
  label,
  name,
  onChange,
  type,
  autoFocus,
  helpMessage,
  placeholder,
  required,
  value,
}) => {
  return (
    <div className={'input'}>
      <div className={'input__helpMessage'}>
        <label htmlFor={id}>{label}</label>
        {helpMessage && <HelpMessage message={helpMessage} />}
      </div>

      <input
        {...{
          id,
          name,
          value,
          onChange,
          type,
          autoFocus,
          placeholder,
          required,
        }}
      />
    </div>
  );
};

export default Input;
