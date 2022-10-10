import { useEffect, useState } from 'react';

import { PostModel } from '@/domain/models';
import { usePostsDataContext } from '@/store/hooks';
import { useObserver } from '@/presentation/hooks';

export const useCardsContainer = () => {
  const { error, postsList } = usePostsDataContext();
  const [itemsToRenderAmount, setItemsToRenderAmount] = useState(0);
  const [postsToRender, setPostsToRender] = useState([] as PostModel[]);

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

  useEffect(() => {
    const element = document.getElementById('end');
    if (element) {
      setElement(element);
    }
  }, []);

  useEffect(() => {
    setPostsToRender(postsList.slice(0, itemsToRenderAmount));
  }, [itemsToRenderAmount, postsList]);

  return { error, postsToRender };
};
