import Styles from './styles.scss';

type Props = {
  id: string;
  name: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Teaxtarea: React.FC<Props> = ({ id, name, onChange, value, label }) => {
  return (
    <div className={Styles.textareaContainer}>
      <label className={Styles.textareaLabel} htmlFor={id}>
        {label || 'Message'}
      </label>

      <textarea
        className={Styles.textarea}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Teaxtarea;
