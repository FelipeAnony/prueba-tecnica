import { useEffect, useState } from 'react';

import { usePostsDataContext } from '@/store/hooks';
import { useObserver } from '@/presentation/hooks';

export const useCardsWrapper = () => {
  const { error, postsList } = usePostsDataContext();
  const [itemsToRenderAmount, setItemsToRenderAmount] = useState(0);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setItemsToRenderAmount((state) => state + 10);
      }
    });
  };

  const observerOptions: IntersectionObserverInit = {
    rootMargin: '40% 0px 0px 0px',
  };

  const { setElement } = useObserver(observerCallback, observerOptions);

  useEffect(() => setElement(document.getElementById('end')), []);

  const postsToRender = postsList.slice(0, itemsToRenderAmount);

  return { error, postsToRender };
};
