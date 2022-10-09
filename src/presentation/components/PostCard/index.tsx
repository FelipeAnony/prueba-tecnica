import { FaUserAlt } from 'react-icons/fa';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';

import { PostModel } from '@/domain/models';

import Styles from './styles.scss';

const PostCard: React.FC<PostModel> = ({ body, id, title, userId }) => {
  return (
    <section className={Styles.postCard}>
      <div className={Styles.imgContainer}>
        <FaUserAlt />
      </div>

      <div className={Styles.titleContainer}>
        <h2 className={Styles.title}>{title}</h2>
        <span className={Styles.userId}>user: {userId}</span>
      </div>

      <div className={Styles.downContainer}>
        <p className={Styles.body}>{body}</p>
        <div className={Styles.cardOptions}>
          <AiOutlineHeart />
          <AiOutlineEdit />
          <AiOutlineDelete />
        </div>
      </div>
    </section>
  );
};

export default PostCard;
