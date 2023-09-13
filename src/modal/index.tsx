import './modal.css';
import { useRef } from 'react';
import { closeModal } from '../store/reducers/modalReducer';
import HomeNewCreate from './body/homeNewCreate';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
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

    default:
      return;
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

  return (
    <div className={`styled-modal ${component ? 'open' : 'close'}`}>
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
  );
};

export default Modal;
