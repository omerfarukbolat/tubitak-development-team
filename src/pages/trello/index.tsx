import { useEffect, useState } from 'react';
import CardDetailsList, { DataProps } from '../../components/card-detail-list';
import Container from '../../components/container';
import './trello.css';
import dummyDatas from '../../json/dummyTrello.json';
import Input from '../../components/input';
import TextArea from '../../components/textArea';

const Trello = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    setData(dummyDatas);
  }, []);

  const onlyStatusAddInArr = (data: DataProps[]) => {
    const setStatus = new Set();

    for (const item of data) {
      setStatus.add(item.status);
    }
    return Array.from(setStatus);
  };

  const titleFormatted = (title: string | unknown): string => {
    if (typeof title === 'string') {
      if (title.includes('_')) {
        return title
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      } else {
        return title.charAt(0).toUpperCase() + title.slice(1);
      }
    } else {
      return '';
    }
  };

  const multipleData = (data: DataProps[]) => {
    const multiData = [];

    const statusArr = onlyStatusAddInArr(data);

    for (let i = 0; i < statusArr.length; i++) {
      const element = statusArr[i];
      multiData.push({
        id: i,
        title: titleFormatted(element),
        data: data.filter(
          (item: { status: string }) => item.status === element
        ),
      });
    }
    return multiData;
  };
  const onClickDeleteCard = (item: DataProps) => {
    const oldItemForDelete = data.filter((fi) => fi.id !== item.id);
    setData(oldItemForDelete);
  };
  const onClickUpdatedCard = (item: DataProps) => {
    const oldItemForDelete = data.filter((fi) => fi.id !== item.id);

    setData([...oldItemForDelete, item]);
  };

  const addNewItemToCard = (item: DataProps) => {
    setData([...data, item]);
  };

  const dropdownHandleNextTo = (item: DataProps, nextStatus: string) => {
    const oldItemForDelete: any = data.filter((fi) => fi.id !== item.id);
    const selectedItemForLifting: DataProps | undefined = data.find(
      (fi) => fi.id === item.id
    );

    setData([
      ...oldItemForDelete,
      { ...selectedItemForLifting, status: nextStatus },
    ]);
  };

  return (
    <Container>
      <div className="styled-trello">
        {multipleData(data).map((item) => (
          <CardDetailsList
            addButton={item.title === 'Todo' ? true : false}
            addInput={item.title === 'Todo' ? true : false}
            key={item.id}
            label={item.title}
            data={item.data as DataProps[]}
            setData={setData}
            dropdownTitles={onlyStatusAddInArr(data)}
            dropdownNextClick={dropdownHandleNextTo}
            dropdownDeleteClick={onClickDeleteCard}
            updatedItem={onClickUpdatedCard}
            addItem={addNewItemToCard}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trello;
