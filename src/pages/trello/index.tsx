import { useEffect, useState } from 'react';
import CardDetailsList, { DataProps } from '../../components/card-detail-list';
import Container from '../../components/container';
import './trello.css';
import dummyDatas from '../../json/dummyTrello.json';

const Trello = () => {
  const [dataToDo, setDataToDo] = useState<DataProps[]>([]);
  const [dataInProgress, setDataInProgress] = useState<DataProps[]>([]);
  const [dataDone, setDataDone] = useState<DataProps[]>([]);

  const mappedDummyData = dummyDatas.map((item) => {
    return { ...item, id: item.id, name: item.name, status: item.status };
  });

  return (
    <Container>
      <div className="styled-trello">
        <div className="styled-trello-card-todo">
          <CardDetailsList
            label="To Do"
            dropdown={[
              { name: 'In Progress', click() {} },
              { name: 'Update', click() {} },
              { name: 'Delete', click() {} },
            ]}
            data={dataToDo}
            setData={setDataToDo}
          />
        </div>
        <div className="styled-trello-card-inProgress">
          <CardDetailsList
            label="In Progress"
            dropdown={[
              { name: 'Done', click() {} },
              { name: 'Update', click() {} },
              { name: 'Delete', click() {} },
            ]}
            data={dataInProgress}
            setData={setDataInProgress}
          />
        </div>
        <div className="styled-trello-card-done">
          <CardDetailsList
            label="Done"
            dropdown={[
              { name: 'Update', click() {} },
              { name: 'Delete', click() {} },
            ]}
            data={dataDone}
            setData={setDataDone}
          />
        </div>
      </div>
    </Container>
  );
};

export default Trello;
