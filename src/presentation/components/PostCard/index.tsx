import { useTranslation } from 'react-i18next';
import { FaUserAlt } from 'react-icons/fa';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEdit,
  AiOutlineDelete,
} from 'react-icons/ai';

import { PostModel } from '@/domain/models';
import { usePostsDataContext } from '@/store/hooks';
import { Modal, EditPostForm, DeleteConfirmation } from '../';
import { usePostCard } from '@/presentation/hooks';

import './styles.scss';

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
      <section className={'postCard'}>
        <div className={'postCard__imgContainer'}>
          <FaUserAlt />
        </div>

        <header className={'postCard__header'}>
          <h2 className={'postCard__title'}>{title}</h2>
          <span className={'postCard__userId'}>
            {t('user')} {userId}
          </span>
        </header>

        <div className={'postCard__bottomContainer'}>
          <p className={'postCard__p'}>{body}</p>
          <div className={'postCard__cardOptions'}>
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
