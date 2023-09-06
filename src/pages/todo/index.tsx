import React, { useState, useEffect } from 'react';
import Container from '../../components/container';
import Input from '../../components/input';
import './todo.css';
import Tabs from '../../components/tabs';
import Button from '../../components/button';
import CheckboxList from '../../components/ckeckbox-list';
import data from '../../api/dummy_todo.json';

const Todo = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [newTask, setNewTask] = useState('');
  const [apiData, setApiData] = useState(data.apiData || []);
  const [filteredData, setFilteredData] = useState(apiData);
  const [editedTask, setEditedTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const tabData = data.tabData;

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      const newTaskItem = {
        id: Date.now(),
        label: newTask,
        isCompleted: false,
      };
      setApiData([...apiData, newTaskItem]);
      setNewTask('');
    }
  };
  useEffect(() => {
    const updateFilteredData = () => {
      let filteredTasks:
        | { id: number; label: string; isCompleted: boolean }[]
        | undefined;

      if (activeTab === 'completed') {
        filteredTasks = apiData.filter((task) => task.isCompleted === true);
      } else if (activeTab === 'pending') {
        filteredTasks = apiData.filter((task) => task.isCompleted === false);
      } else if (activeTab === 'all') {
        filteredTasks = apiData;
      }

      setFilteredData(filteredTasks || []);
    };

    updateFilteredData();
  }, [activeTab, apiData]);
  const handleClearAll = () => {
    const updatedApiData = apiData.filter((task) => !task.isCompleted);
    setApiData(updatedApiData);
  };

  const getDropdownData = (task: {
    id: number;
    label: string;
    isCompleted: boolean;
  }) => {
    const commonOptions = [
      {
        name: 'Update',
        click: () => handleEditTask(task.id),
      },
      {
        name: task.isCompleted ? 'Not Completed' : 'Completed',
        click: () => handleToggleCompleted(task.id),
      },
    ];

    if (task.isCompleted) {
      return [
        ...commonOptions,
        {
          name: 'Delete',
          click: () => handleDeleteTask(task.id),
        },
      ];
    } else {
      return commonOptions;
    }
  };
  const handleDeleteTask = (taskId: number) => {
    const updatedApiData = apiData.filter((task) => task.id !== taskId);
    setApiData(updatedApiData);
  };
  const handleUpdateTask = (taskId: number) => {
    const updatedApiData = apiData.map((task) =>
      task.id === taskId ? { ...task, label: editedTask } : task
    );
    setApiData(updatedApiData);
    setEditingTaskId(null);
  };
  const handleEditTask = (taskId: number) => {
    setEditingTaskId(taskId);
    setEditedTask(apiData.find((task) => task.id === taskId)?.label || '');
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedTask('');
  };
  const reversedData = filteredData.slice().reverse();

  const handleToggleCompleted = (taskId: number) => {
    const updatedApiData = apiData.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setApiData(updatedApiData);
  };
  const handleCheckboxChangeInTodo = (taskId: number) => {
    const updatedApiData = apiData.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setApiData(updatedApiData);
  };
  return (
    <Container>
      <div className="styled-todo">
        <div className="styled-todo-input">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(newValue) => setNewTask(newValue)}
            onKeyDown={handleInputKeyDown}
            maxWidth={true}
          />
        </div>
        <div className="styled-todo-tabs">
          <Tabs data={tabData} active={activeTab} setActive={setActiveTab} />

          <Button
            label="Clear All"
            colour="white"
            backgroundColour="blue"
            onClick={() => handleClearAll()}
          />
        </div>
        <div className="styled-todo-tabs-end"></div>
        {reversedData.map((task) =>
          editingTaskId === task.id ? (
            <div className="styled-todo-input">
              <Input
                value={editedTask}
                onChange={(newValue) => setEditedTask(newValue)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUpdateTask(task.id);
                  } else if (e.key === 'Escape') {
                    cancelEdit();
                  }
                }}
                maxWidth={true}
              />
            </div>
          ) : (
            <CheckboxList
              key={task.id}
              data={[task]}
              dropdownData={getDropdownData(task)}
              onCheckboxChange={() => handleCheckboxChangeInTodo(task.id)}
            />
          )
        )}
        <div className="styled-todo-list-end"></div>
      </div>
    </Container>
  );
};

export default Todo;
