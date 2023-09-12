import { ModalProps } from '../..';
import Button from '../../../components/button';
import Input from '../../../components/input';
import './addCard.css';

const AddCard: React.FC<ModalProps> = ({ meta }) => {
  return (
    <div className="styled-add-card">
      <div className="styled-add-card-input">
        <Input value="" onChange={() => {}} maxWidth />
      </div>
      <div className="styled-add-card-buttons">
        <Button label="Cancel" onClick={() => {}} />
        <Button label="Add" onClick={() => {}} />
      </div>
    </div>
  );
};

export default AddCard;
