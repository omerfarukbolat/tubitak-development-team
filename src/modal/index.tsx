import './modal.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/reducers/modalReducer';
import HomeNewCreate from './body/homeNewCreate';
import useOnClickOutside from '../hooks/useOnClickOutside';

export interface ModalProps {
  meta?: any;
  closeModal: () => void | undefined;
}

const getComponent = (cmpnt: string, meta: any, closeModal: () => void) => {
  console.log(closeModal);
  switch (cmpnt) {
    case 'home-new-create':
      return <HomeNewCreate meta={meta} closeModal={closeModal} />;

    default:
      return;
  }
};

const Modal = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => handleCloseModal());

  const component = useSelector(
    (state: { modal: { component: string } }) => state.modal.component
  );
  const title = useSelector(
    (state: { modal: { title: string } }) => state.modal.title
  );
  const meta = useSelector(
    (state: { modal: { meta: any } }) => state.modal.meta
  );

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
