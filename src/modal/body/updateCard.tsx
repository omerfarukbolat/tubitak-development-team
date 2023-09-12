import { useEffect, useState } from 'react';
import { ModalProps } from '..';
import Button from '../../components/button';
import Input from '../../components/input';
import SelectButton from '../../components/select-button';
import './updateCard.css';

const UpdateCard: React.FC<ModalProps> = ({ meta }) => {
  const [value, setvalue] = useState('');

  useEffect(() => {
    setvalue(meta.name);
  }, [meta.name]);

  return (
    <div className="styled-updatedCard">
      <div className="styled-updatedCard-select-button">
        <SelectButton
          label={'Titles Selection'}
          data={['Todo', 'In Progress', 'Done']}
          isActive={null}
          setIsActive={() => {}}
        />
      </div>
      <div className="styled-updatedCard-selected-input">
        <Input
          label="Card Name"
          value={value}
          onChange={() => {}}
          maxWidth
          backgroundColor="gray"
        />
      </div>
      <div className="styled-updatedCard-buttons">
        <Button label="Cancel" onClick={() => {}} />
        <Button
          label="Update"
          onClick={() => {}}
          backgroundColour="blue"
          colour="white"
        />
      </div>
    </div>
  );
};

export default UpdateCard;
