import './styles.scss';

type Props = {
  message: string;
};

const HelpMessage: React.FC<Props> = ({ message }) => {
  return (
    <div title={message} className={'helpMessage'}>
      ?
    </div>
  );
};

export default HelpMessage;
