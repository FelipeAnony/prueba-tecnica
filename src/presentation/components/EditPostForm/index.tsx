import { PostModel } from '@/domain/models';

import { Input, Button } from '../';

import Styles from './styles.scss';
import { useEditPostForm } from './useEditPostForm';

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
  const { formData, handleChange } = useEditPostForm(title, body);

  return (
    <section className={Styles.editPostFormContainer}>
      <h2 className={Styles.edit}>Edit Post</h2>
      <form className={Styles.form} onSubmit={(e) => e.preventDefault()}>
        <Input
          id="title"
          label="Title"
          name="title"
          onChange={handleChange}
          type={'text'}
          value={formData.title}
        />

        <div className={Styles.textareaContainer}>
          <label className={Styles.textareaLabel} htmlFor="body">
            Message
          </label>
          <textarea
            className={Styles.textarea}
            id="body"
            name="body"
            onChange={handleChange}
            value={formData.body}
          />
        </div>

        <div className={Styles.buttonsContainer}>
          <Button style="outline" onClick={closeFn}>
            Cancel
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
            Save Changes
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EditPostForm;
