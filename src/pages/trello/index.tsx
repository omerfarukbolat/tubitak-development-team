import { useEffect } from 'react';
import CardDetailsList, { DataProps } from '../../components/card-detail-list';
import Container from '../../components/container';
import './trello.css';
import Button from '../../components/button';
import { openModal } from '../../store/reducers/modalReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setTrelloFetch } from '../../store/reducers/trelloReducer';
import dummyDatas from '../../json/dummyTrello.json';

const Trello = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.trello.data);

  useEffect(() => {
    dispatch(setTrelloFetch(dummyDatas));
  }, [dispatch]);

  return (
    <Container>
      <div className="styled-trello-openModal-button">
        <Button
          label="Add Title"
          onClick={() =>
            dispatch(
              openModal({
                component: 'add-title',
                title: 'Add Title',
              })
            )
          }
        />
      </div>

      <div className="styled-trello">
        {data.map((item) => (
          <CardDetailsList
            key={item.id}
            label={item.title}
            data={item.data as DataProps[]}
            item={{ id: item.id, title: item.title }}
            cardTitleId={item.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trello;
