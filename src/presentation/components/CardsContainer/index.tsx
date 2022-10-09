import { useCardsContainer } from './useCardsContainer';

import PostCard from '../PostCard';

import Styles from './styles.scss';

const CardsContainer: React.FC = () => {
  const { postsList } = useCardsContainer();

  return (
    <main className={Styles.cardsContainer}>
      {postsList.map((e) => (
        <PostCard key={e.id} {...e} />
      ))}
    </main>
  );
};

export default CardsContainer;
