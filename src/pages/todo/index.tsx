import React, { useState, useEffect } from 'react';
import Container from '../../components/container';
import Input from '../../components/input';
import './todo.css';
import Tabs from '../../components/tabs';
import Button from '../../components/button';
import CheckboxList from '../../components/ckeckbox-list';
import data from '../../api/dummy_todo.json';
import { openModal } from '../../store/reducers/modalReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  setAddTodo,
  setRemoveTodo,
  setRemoveAllTodo,
  setToggleCompleteTodo,
  setActiveTab,
  todoFetch,
} from '../../store/reducers/todoReducer';

const Todo = () => {
  const dispatch = useAppDispatch();
  const todoData = useAppSelector((state) => state.todo.data);
  const activeTab = useAppSelector((state) => state.todo.activeTab);
  const didFetched = useAppSelector((state) => state.todo.didFetched);
  const [newTask, setNewTask] = useState('');
  const [filteredData, setFilteredData] = useState<
    { id: number; label: string; isCompleted: boolean }[]
  >([]);

  const tabData = data.tabData;
  const reversedData = filteredData.slice().reverse();

  useEffect(() => {
    if (!didFetched) {
      dispatch(todoFetch(data.apiData));
    }
  }, [didFetched, dispatch]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      const newTaskItem = {
        id: Date.now(),
        label: newTask,
        isCompleted: false,
      };
      dispatch(setAddTodo(newTaskItem));
      setNewTask('');
    }
  };

  useEffect(() => {
    const updateFilteredData = () => {
      let filteredTasks:
        | { id: number; label: string; isCompleted: boolean }[]
        | undefined;

      if (activeTab === 'completed') {
        filteredTasks = todoData.filter((task) => task.isCompleted === true);
      } else if (activeTab === 'pending') {
        filteredTasks = todoData.filter((task) => task.isCompleted === false);
      } else if (activeTab === 'all') {
        filteredTasks = todoData;
      }

      setFilteredData(filteredTasks || []);
    };

    updateFilteredData();
  }, [activeTab, todoData]);

  const handleClearAll = () => {
    dispatch(setRemoveAllTodo());
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
    dispatch(setRemoveTodo(taskId));
  };

  const handleEditTask = (taskId: number) => {
    const taskToEdit = todoData.find((task) => task.id === taskId);

    if (taskToEdit) {
      dispatch(
        openModal({
          component: 'todo-update',
          title: 'Update Todo',
          meta: {
            id: taskToEdit.id,
            label: taskToEdit.label,
            isCompleted: taskToEdit.isCompleted,
          },
        })
      );
    }
  };

  const handleToggleCompleted = (taskId: number) => {
    dispatch(setToggleCompleteTodo(taskId));
  };

  const handleCheckboxChangeInTodo = (taskId: number) => {
    dispatch(setToggleCompleteTodo(taskId));
  };

  const setActive = (tab: string) => {
    dispatch(setActiveTab(tab));
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
            maxWidth
          />
        </div>
        <div className="styled-todo-tabs">
          <Tabs data={tabData} active={activeTab} setActive={setActive} />
          <Button
            label="Clear All"
            colour="white"
            backgroundColour="blue"
            onClick={() => handleClearAll()}
          />
        </div>
        <div className="styled-todo-tabs-end"></div>
        {reversedData.map((task) => (
          <CheckboxList
            key={task.id}
            data={[task]}
            dropdownData={getDropdownData(task)}
            onCheckboxChange={() => handleCheckboxChangeInTodo(task.id)}
          />
        ))}
        <div className="styled-todo-list-end"></div>
      </div>
    </Container>
  );
};

export default Todo;
