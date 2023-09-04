import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Notes from './pages/notes';
import Todo from './pages/todo';
import Trello from './pages/trello';
import Navbar from './components/navbar';
import Modal from './modal';

const App = () => {
  return (
    <Router>
      <Modal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/trello" element={<Trello />} />
      </Routes>
    </Router>
  );
};

export default App;
