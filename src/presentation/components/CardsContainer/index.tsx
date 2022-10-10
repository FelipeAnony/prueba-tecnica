import { useCardsContainer } from './useCardsContainer';

import PostCard from '../PostCard';

import Styles from './styles.scss';

const CardsContainer: React.FC = () => {
  const { postsToRender } = useCardsContainer();

  return (
    <main className={Styles.cardsContainer}>
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
