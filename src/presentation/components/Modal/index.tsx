import { Button } from '@/presentation/components';

import './styles.scss';

type Props = {
  closeModalFn: () => void;
  children: JSX.Element;
};

const Modal: React.FC<Props> = ({ closeModalFn, children }) => {
  return (
    <div
      data-testid="modalOutContainer"
      onClick={closeModalFn}
      className={'modal'}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={'modal__innerContainer'}
      >
        <div className={'modal__closeButton'}>
          <Button style="clear" onClick={closeModalFn}>
            X
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
