import {Button} from "../ui/Button.tsx";

export const FormActions = () => {
  return <div className='form__actions flex'>
    <Button
      className='form__button_create-job'
      type='submit'
      >
      <span>Create job</span>
    </Button>
    <Button
      className='form__button_save-info'
      disabled={true}
    >
      Save info
    </Button>
  </div>
}