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
  // const [data, setData] = useState<DataProps[]>([]);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.trello.data);
  useEffect(() => {
    dispatch(setTrelloFetch(dummyDatas));
  }, []);

  // useEffect(() => {
  //   setData(dummyDatas);
  // }, []);

  // const onlyStatusAddInArr = (data: DataProps[]) => {
  //   const setStatus = new Set();

  //   for (const item of data) {
  //     setStatus.add(item.status);
  //   }
  //   return Array.from(setStatus);
  // };

  // const titleFormatted = (title: string | unknown): string => {
  //   if (typeof title === 'string') {
  //     if (title.includes('_')) {
  //       return title
  //         .split('_')
  //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //         .join(' ');
  //     } else {
  //       return title.charAt(0).toUpperCase() + title.slice(1);
  //     }
  //   } else {
  //     return '';
  //   }
  // };

  // const multipleData = (data: DataProps[]) => {
  //   const multiData = [];

  //   const statusArr = onlyStatusAddInArr(data);

  //   for (let i = 0; i < statusArr.length; i++) {
  //     const element = statusArr[i];
  //     multiData.push({
  //       id: i,
  //       title: titleFormatted(element),
  //       data: data.filter(
  //         (item: { status: string }) => item.status === element
  //       ),
  //     });
  //   }
  //   return multiData;
  // };
  // const onClickDeleteCard = (item: DataProps) => {
  //   const oldItemForDelete = data.filter((fi) => fi.id !== item.id);
  //   setData(oldItemForDelete);
  // };
  // const onClickUpdatedCard = (item: DataProps) => {
  //   const oldItemForDelete = data.filter((fi) => fi.id !== item.id);

  //   setData([...oldItemForDelete, item]);
  // };

  // const addNewItemToCard = (item: DataProps) => {
  //   setData([...data, item]);
  // };

  // const dropdownHandleNextTo = (item: DataProps, nextStatus: string) => {
  //   const oldItemForDelete: any = data.filter((fi) => fi.id !== item.id);
  //   const selectedItemForLifting: DataProps | undefined = data.find(
  //     (fi) => fi.id === item.id
  //   );

  //   setData([
  //     ...oldItemForDelete,
  //     { ...selectedItemForLifting, status: nextStatus },
  //   ]);
  // };

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
            setData={() => {}}
            item={{ id: item.id, title: item.title }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trello;
