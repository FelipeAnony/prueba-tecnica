import { RemotePosts } from '@/data/usecases';
import { HttpFetchClientAdapter } from '@/infra/adapters';

import { getPostsUrl } from '../utils/endpoints';

export const makeRemotePosts = () => {
  return new RemotePosts(getPostsUrl, new HttpFetchClientAdapter());
};
