import { useTranslation } from 'react-i18next';

import { PostCard, LogoSpinner, ErrorMessage } from '../';
import { useCardsContainer } from './useCardsContainer';

import Styles from './styles.scss';

const CardsContainer: React.FC = () => {
  const { postsToRender, error } = useCardsContainer();
  const { t } = useTranslation();

  return (
    <main className={Styles.cardsContainer}>
      {error && (
        <div className={Styles.errorContainer}>
          <ErrorMessage error={'Error:' + t('cannot get posts')} />
        </div>
      )}

      {postsToRender.length < 1 && !error && (
        <div data-testid="loadingSpinner" className={Styles.spinnerContainer}>
          <LogoSpinner />
        </div>
      )}

      <article className={Styles.innerContainer}>
        {postsToRender.map((e) => (
          <PostCard key={e.id} {...e} />
        ))}
      </article>
      <div id="end"></div>
    </main>
  );
};

export default CardsContainer;
