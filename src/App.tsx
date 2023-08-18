import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Notes from './pages/notes';
import Todo from './pages/todo';
import Trello from './pages/trello';
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
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
