import Button from '../../components/button';
import { openModal } from '../../store/reducers/modalReducer';
import Container from '../../components/container';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Home = () => {
  const dispatch = useAppDispatch();

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
