import Button from '../Button';

import Styles from './styles.scss';

type Props = {
  closeModalFn: () => void;
  children: JSX.Element;
};

const Modal: React.FC<Props> = ({ closeModalFn, children }) => {
  return (
    <div
      data-testid="modalOutContainer"
      onClick={closeModalFn}
      className={Styles.modalWindow}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={Styles.modalContainer}
      >
        <div className={Styles.buttonContainer}>
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
