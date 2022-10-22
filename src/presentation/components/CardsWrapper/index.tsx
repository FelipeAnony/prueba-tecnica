import { useTranslation } from 'react-i18next';

import { PostCard, LogoSpinner, ErrorMessage } from '..';
import { useCardsWrapper } from '@/presentation/hooks';

import './styles.scss';

const CardsContainer: React.FC = () => {
  const { postsToRender, error } = useCardsWrapper();
  const { t } = useTranslation();

  return (
    <main className={'cardsWrapper'}>
      {error && (
        <div className={'cardsWrapper__errorContainer'}>
          <ErrorMessage error={'Error: ' + t('cannot get posts')} />
        </div>
      )}

      {postsToRender.length < 1 && !error && (
        <div
          data-testid="loadingSpinner"
          className={'cardsWrapper__loadingContainer'}
        >
          <LogoSpinner />
        </div>
      )}

      <article className={'cardsWrapper__cardsContainer'}>
        {postsToRender.map((e) => (
          <PostCard key={e.id} {...e} />
        ))}
      </article>
      <div id="end"></div>
    </main>
  );
};

export default CardsContainer;
