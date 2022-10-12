import { FaUserAlt } from 'react-icons/fa';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { PostModel } from '@/domain/models';

import { Modal, EditPostForm, DeleteConfirmation } from '../';
import { usePostCard } from './usePostCard';

import { usePostsDataContext } from '@/store/hooks';

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

  const { removePost, editPost } = usePostsDataContext();
  const { t } = useTranslation();

  return (
    <>
      <section className={Styles.postCard}>
        <div className={Styles.imgContainer}>
          <FaUserAlt />
        </div>

        <div className={Styles.titleContainer}>
          <h2 className={Styles.title}>{title}</h2>
          <span className={Styles.userId}>
            {t('user')} {userId}
          </span>
        </div>

        <div className={Styles.downContainer}>
          <p className={Styles.body}>{body}</p>

          <div className={Styles.cardOptions}>
            <div data-testid="heartContainer" onClick={handleLikeClick}>
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
            <AiOutlineEdit data-testid="editIcon" onClick={openEditModal} />
            <AiOutlineDelete
              data-testid="deleteIcon"
              onClick={openDeleteModal}
            />
          </div>
        </div>
      </section>
      {modalIsOpen && (
        <Modal closeModalFn={closeModal}>
          {modalContent === 'editModal' ? (
            <EditPostForm
              title={title}
              body={body}
              id={id}
              userId={userId}
              closeFn={closeModal}
              editFn={editPost}
            />
          ) : (
            <DeleteConfirmation
              name={title}
              cancelDeleteFn={closeModal}
              deleteFn={() => removePost(id)}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default PostCard;
