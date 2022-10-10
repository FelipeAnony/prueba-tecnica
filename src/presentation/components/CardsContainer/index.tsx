import { useCardsContainer } from './useCardsContainer';

import PostCard from '../PostCard';

import Styles from './styles.scss';
import LogoSpinner from '../LogoSpinner';

const CardsContainer: React.FC = () => {
  const { postsToRender } = useCardsContainer();

  return (
    <main className={Styles.cardsContainer}>
      {postsToRender.length < 1 && (
        <div className={Styles.spinnerContainer}>
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
