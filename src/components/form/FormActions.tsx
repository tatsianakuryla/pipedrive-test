import Button from '../ui/Button.tsx';

function FormActions() {
  return (
    <div className="form__actions flex">
      <Button className="form__button_create-job" type="submit">
        <span>Create job</span>
      </Button>
      <Button className="form__button_save-info" disabled>
        Save info
      </Button>
    </div>
  );
}

export default FormActions;
