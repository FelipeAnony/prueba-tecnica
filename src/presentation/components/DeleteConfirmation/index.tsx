import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className={Styles.deleteConfirmation}>
      <span className={Styles.question}>
        {t('are you sure you want to delete')}:
      </span>
      <span className={Styles.name}>{name} ?</span>
      <div className={Styles.buttonsContainer}>
        <Button onClick={cancelDeleteFn}>{t('no, cancel')}</Button>
        <Button onClick={deleteFn} style="clear">
          <span className={Styles.deleteButton}>{t('yes, delete')}</span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
