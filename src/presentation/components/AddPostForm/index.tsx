import { AiOutlineDown } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { Input, Textarea, Button } from '../';
import { useGlobalDataContext } from '@/store/hooks';
import { useAddPostForm } from '@/presentation/hooks';

import './styles.scss';

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
    <section className={`addPostForm ${isOpen && 'addPostForm--open'}`}>
      <div className={'addPostForm__header'}>
        <h2 className={'addPostForm__title'}>{t('add new post')}</h2>
        <AiOutlineDown
          data-testid="openButton"
          className={`addPostForm__arrowButton ${
            isOpen && 'addPostForm__arrowButton--up'
          }`}
          onClick={handleOpenClick}
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className={'addPostForm__form'}
      >
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

        <div className={'addPostForm__addButtonContainer'}>
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
