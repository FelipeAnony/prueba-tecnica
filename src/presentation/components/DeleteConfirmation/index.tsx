import { useTranslation } from 'react-i18next';

import Button from '../Button';

import './styles.scss';

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
    <div className={'deleteConfirmation'}>
      <span className={'deleteConfirmation__question'}>
        {t('are you sure you want to delete')}:
      </span>

      <span className={'deleteConfirmation__targetName'}>{name} ?</span>

      <div className={'deleteConfirmation__buttonsContainer'}>
        <Button onClick={cancelDeleteFn}>{t('no, cancel')}</Button>
        <Button onClick={deleteFn} style="clear">
          <span className={'deleteConfirmation__deleteText'}>
            {t('yes, delete')}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
