import { useDispatch } from 'react-redux';
import Button from '../../components/button';
import { openModal } from '../../store/reducers/modalReducer';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <Button
        label="aç modal yeni eklemek"
        onClick={() =>
          dispatch(
            openModal({
              component: 'home-new-create',
              title: 'Yeni kayıt',
            })
          )
        }
      />
    </div>
  );
};

export default Home;
