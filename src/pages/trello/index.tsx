import { useEffect, useState } from 'react';
import CardDetailsList, { DataProps } from '../../components/card-detail-list';
import Container from '../../components/container';
import './trello.css';
import dummyDatas from '../../json/dummyTrello.json';

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
    // const updatedData = data.filter((item) => item.id !== selectedId);
    // setData(updatedData);
  };

  const getDropdownOptions = (statusTitle: string, item: any) => {
    if (statusTitle === 'Todo') {
      return [
        {
          name: 'In Progress',
          click: () => {},
        },
        {
          name: 'Update',
          click: () => {},
        },
        {
          name: 'Delete',
          click: () => {
            onClickDeleteCard(item);
          },
        },
      ];
    } else if (statusTitle === 'In Progress') {
      return [
        {
          name: 'Done',
          click: () => {},
        },
        {
          name: 'Update',
          click: () => {},
        },
        {
          name: 'Delete',
          click: () => {},
        },
      ];
    } else if (statusTitle === 'Done') {
      return [
        {
          name: 'Update',
          click: () => {},
        },
        {
          name: 'Delete',
          click: () => {},
        },
      ];
    } else {
      return [];
    }
  };

  return (
    <Container>
      <div className="styled-trello">
        {multipleData(data).map((item) => (
          <CardDetailsList
            addButton={item.title === 'Todo' ? true : false}
            addInput={item.title === 'Todo' && 'In Progress' ? true : false}
            key={item.id}
            label={item.title}
            dropdown={getDropdownOptions(item.title, item)}
            data={item.data as DataProps[]}
            setData={setData}
          />
        ))}
      </div>
    </Container>
  );
};

export default Trello;
