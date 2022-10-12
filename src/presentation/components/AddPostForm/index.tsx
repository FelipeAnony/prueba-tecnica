import { AiOutlineDown } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { useGlobalDataContext, usePostsDataContext } from '@/store/hooks';
import { Input, Textarea, Button } from '../';

import Styles from './styles.scss';
import { useAddPostForm } from './useAddPostForm';

const AddPostForm: React.FC = () => {
  const { formData, handleChange, isOpen, handleOpenClick, clearForm } =
    useAddPostForm();

  const { user } = useGlobalDataContext();
  const { addPost, postsList } = usePostsDataContext();
  const { t } = useTranslation();

  const newPostObject = {
    title: formData.title,
    body: formData.body,
    userId: user?.user || '',
    id: postsList.length,
  };

  return (
    <section
      className={`${Styles.addPostFormContainer} ${
        isOpen && Styles.containerIsOpen
      }`}
    >
      <div className={Styles.titleContainer}>
        <h2 className={Styles.title}>{t('add new post')}</h2>
        <AiOutlineDown
          className={`${Styles.arrowIcon} ${!isOpen && Styles.arrowUp}`}
          onClick={handleOpenClick}
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className={Styles.form}>
        <Input
          id="addPostTitle"
          name="title"
          label={t('title')}
          onChange={handleChange}
          value={formData.title}
          type="text"
        />

        <Textarea
          id="addPostMessage"
          name="body"
          onChange={handleChange}
          value={formData.body}
          label={t('message')}
        />

        <div className={Styles.buttonContainer}>
          <Button
            onClick={() => {
              addPost(newPostObject);
              clearForm();
            }}
            disabled={formData.title.length === 0 || formData.body.length === 0}
          >
            {t('add post')}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
