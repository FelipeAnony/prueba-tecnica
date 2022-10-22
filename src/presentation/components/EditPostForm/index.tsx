import { useTranslation } from 'react-i18next';

import { PostModel } from '@/domain/models';
import { Input, Button, Textarea } from '@/presentation/components';
import { useForm } from '@/presentation/hooks';

import './styles.scss';

type Props = {
  title: string;
  body: string;
  id: number;
  userId: string | number;
  closeFn: () => void;
  editFn: (postId: number, newPostData: PostModel) => void;
};

const EditPostForm: React.FC<Props> = ({
  body,
  closeFn,
  editFn,
  title,
  id,
  userId,
}) => {
  const [formData, handleChange] = useForm({ title, body });
  const { t } = useTranslation();

  return (
    <section className={'editPostForm'}>
      <h2 className={'editPostForm__title'}>{t('edit post')}</h2>
      <form
        className={'editPostForm__form'}
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          id="title"
          label={t('title')}
          name="title"
          onChange={handleChange}
          type={'text'}
          value={formData.title}
        />

        <Textarea
          id="body"
          name="body"
          onChange={handleChange}
          value={formData.body}
          label={t('message')}
        />

        <div className={'editPostForm__buttonsContainer'}>
          <Button style="outline" onClick={closeFn}>
            {t('cancel')}
          </Button>

          <Button
            onClick={() => {
              editFn(id, {
                body: formData.body,
                title: formData.title,
                id,
                userId,
              });
              closeFn();
            }}
          >
            {t('save changes')}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EditPostForm;
