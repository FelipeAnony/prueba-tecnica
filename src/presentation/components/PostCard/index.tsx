import { FaUserAlt } from 'react-icons/fa';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';

import { PostModel } from '@/domain/models';

import Modal from '../Modal';
import { usePostCard } from './usePostCard';

import Styles from './styles.scss';

const PostCard: React.FC<PostModel> = ({ body, id, title, userId }) => {
  const {
    like,
    modalContent,
    modalIsOpen,
    handleLikeClick,
    closeModal,
    openEditModal,
    openDeleteModal,
  } = usePostCard();

  return (
    <>
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
            <div onClick={handleLikeClick}>
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
            <AiOutlineEdit onClick={openEditModal} />
            <AiOutlineDelete onClick={openDeleteModal} />
          </div>
        </div>
      </section>
      {modalIsOpen && (
        <Modal closeModalFn={closeModal}>
          {modalContent === 'editModal' ? <>edit</> : <>delete</>}
        </Modal>
      )}
    </>
  );
};

export default PostCard;
