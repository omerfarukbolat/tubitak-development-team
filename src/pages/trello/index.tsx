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

  const multipleData = (data: DataProps[]) => {
    const multiData = [];

    const statusArr = onlyStatusAddInArr(data);

    for (let i = 0; i < statusArr.length; i++) {
      const element = statusArr[i];
      multiData.push({
        id: i,
        title: element,
        data: data.filter(
          (item: { status: string }) => item.status === element
        ),
      });
    }
    return multiData;
  };

  return (
    <Container>
      <div className="styled-trello">
        <div className="styled-trello-card-list">
          {multipleData(data).map((item) => (
            <CardDetailsList
              label={
                item.title === 'todo'
                  ? 'To Do '
                  : item.title === 'in_progress'
                  ? ' In Progress'
                  : 'Done'
              }
              dropdown={[
                { name: 'In Progress', click() {} },
                { name: 'Update', click() {} },
                { name: 'Delete', click() {} },
              ]}
              data={item.data}
              setData={setData}
            />
          ))}
        </div>

        {/* <div className="styled-trello-card-inProgress">
          <CardDetailsList
            label="In Progress"
            dropdown={[
              { name: 'Done', click() {} },
              { name: 'Update', click() {} },
              { name: 'Delete', click() {} },
            ]}
            data={data}
            setData={setData}
          />
        </div>

        <div className="styled-trello-card-done">
          <CardDetailsList
            label="Done"
            dropdown={[
              { name: 'Update', click() {} },
              { name: 'Delete', click() {} },
            ]}
            data={data}
            setData={setData}
          />
        </div> */}
      </div>
    </Container>
  );
};

export default Trello;
