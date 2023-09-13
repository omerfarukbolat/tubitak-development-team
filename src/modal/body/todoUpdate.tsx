import { ModalProps } from '..';
import Input from '../../components/input';
import Button from '../../components/button';

const todoUpdate: React.FC<ModalProps> = ({ meta }) => {
  return (
    <div>
      <Input onChange={() => {}} label="" value="" maxWidth />
      <div className='styled-todo-update-button'>
        <Button
          label="Cancel"
          onClick={() => {}}
          colour="white"
          backgroundColour="blue"
        />
        <Button
          label="Update"
          onClick={() => {}}
          colour="white"
          backgroundColour="blue"
        />
      </div>
    </div>
  );
};

export default todoUpdate;
