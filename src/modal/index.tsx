import './modal.css';
import { useRef } from 'react';
import { closeModal } from '../store/reducers/modalReducer';
import HomeNewCreate from './body/homeNewCreate';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import UpdateCard from './body/updateCard/updateCard';
import AddCard from './body/addCard';
import AddTitle from './body/addTitle';
import TodoUpdate from './body/todoUpdate';

export interface ModalProps {
  meta?: any;
  closeModal: () => void | undefined;
}

const getComponent = (cmpnt: string, meta: any, closeModal: () => void) => {
  switch (cmpnt) {
    case 'home-new-create':
      return <HomeNewCreate meta={meta} closeModal={closeModal} />;

    case 'todo-update':
      return <TodoUpdate meta={meta} closeModal={closeModal} />;

    case 'add-title':
      return <AddTitle closeModal={closeModal} />;

    case 'add-card':
      return <AddCard meta={meta} closeModal={closeModal} />;

    case 'update-card':
      return <UpdateCard meta={meta} closeModal={closeModal} />;

    default:
      return <></>;
  }
};
const Modal = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => handleCloseModal());

  const component = useAppSelector((state) => state.modal.component);
  const title = useAppSelector((state) => state.modal.title);
  const meta = useAppSelector((state) => state.modal.meta);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return component ? (
    <div className="styled-modal">
      <div ref={ref} className="styled-modal-card">
        <div
          className="styled-modal-card-close"
          onClick={() => handleCloseModal()}
        />
        {title && <div className="styled-modal-card-title">{title}</div>}
        <div
          className={`styled-modal-card-body ${title ? '' : 'withoutTitle'}`}
        >
          {getComponent(component, meta, () => handleCloseModal())}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
