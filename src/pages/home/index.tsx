import { useDispatch } from 'react-redux';
import Button from '../../components/button';
import { openModal } from '../../store/reducers/modalReducer';
import Container from '../../components/container';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
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
    </Container>
  );
};

export default Home;
