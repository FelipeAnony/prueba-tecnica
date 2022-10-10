import Button from '../Button';
import Styles from './styles.scss';

type Props = {
  deleteFn: () => void;
  cancelDeleteFn: () => void;
  name: string;
};

const DeleteConfirmation: React.FC<Props> = ({
  deleteFn,
  cancelDeleteFn,
  name,
}) => {
  return (
    <div className={Styles.deleteConfirmation}>
      <span className={Styles.question}>Are you sure you want to delete:</span>
      <span className={Styles.name}>{name} ?</span>
      <div className={Styles.buttonsContainer}>
        <Button onClick={cancelDeleteFn}>No, cancel</Button>
        <Button onClick={deleteFn} style="clear">
          <span className={Styles.deleteButton}>Yes, delete</span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
