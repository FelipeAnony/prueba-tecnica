import Styles from './styles.scss';

type Props = {
  message: string;
};

const HelpMessage: React.FC<Props> = ({ message }) => {
  return (
    <div title={message} className={Styles.help}>
      ?
    </div>
  );
};

export default HelpMessage;
