import React, { useState, useEffect } from 'react';
import Container from '../../components/container';
import Input from '../../components/input';
import './todo.css';
import Tabs from '../../components/tabs';
import Button from '../../components/button';
import CheckboxList from '../../components/ckeckbox-list';
import data from '../../api/dummy_todo.json';

const Todo = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [newTask, setNewTask] = useState('');
  const [apiData, setApiData] = useState(data.apiData || []);
  const [filteredData, setFilteredData] = useState(apiData);
  
  const tabData = data.tabData;

  const dropdownData = [
    { name: 'Update', click: () => console.log('Update clicked') },
    { name: 'Delete', click: () => console.log('Delete clicked') },
  ];

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      const newTaskItem = {
        id: Date.now(),
        label: newTask,
        isCompleted: false,
      };

      setApiData([...apiData, newTaskItem]);
      setNewTask('');
      console.log(newTaskItem);
    }
  };

  useEffect(() => {
    let filteredTasks: { id: number; label: string; isCompleted: boolean; }[] | undefined;
  
    if (activeTab === 'completed') {
      filteredTasks = apiData.filter((task) => task.isCompleted === true);
      console.log('Tamamlanan görevler:', filteredTasks); // Tamamlanan görevleri kontrol etmek için log eklendi
    } else if (activeTab === 'pending') {
      filteredTasks = apiData.filter((task) => task.isCompleted === false);
      console.log('Bekleyen görevler:', filteredTasks); // Bekleyen görevleri kontrol etmek için log eklendi
    } else if (activeTab === 'all') {
      filteredTasks = apiData;
    }
  
    setFilteredData(filteredTasks || []);
  }, [activeTab, apiData]);

  return (
    <Container>
      <h1>Todo App</h1>
      <div className="styled-todo">
        <Input
          placeholder="Add a new task"
          value={newTask}
          onChange={(newValue) => setNewTask(newValue)}
          onKeyDown={handleInputKeyDown}
        />
        <div className="styled-todo-tabs">
          <Tabs data={tabData} active={activeTab} setActive={setActiveTab} />

          <Button
            label="Clear All"
            colour="white"
            backgroundColour="blue"
            onClick={() => {}}
          />
        </div>
        <CheckboxList data={filteredData} dropdownData={dropdownData} />
      </div>
    </Container>
  );
};

export default Todo;