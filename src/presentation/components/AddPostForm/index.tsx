import { AiOutlineDown } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { Input, Textarea, Button } from '../';
import { useGlobalDataContext } from '@/store/hooks';
import { useAddPostForm } from '@/presentation/hooks';

import Styles from './styles.scss';

const AddPostForm: React.FC = () => {
  const {
    formData,
    handleChange,
    isOpen,
    handleOpenClick,
    handleAddPost,
    postsList,
  } = useAddPostForm();

  const { user } = useGlobalDataContext();
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
          data-testid="openButton"
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
            onClick={() => handleAddPost(newPostObject)}
            disabled={!formData.title.length || !formData.body.length}
          >
            {t('add post')}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
