// src/App.tsx
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { GET_TODOS } from './queries/getTodos';
import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO } from './queries/mutations';
import { Todo } from './components/TodoList';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<{ todos: Todo[] }>(GET_TODOS);

  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [toggleTodo] = useMutation(TOGGLE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  const handleAddTodo = (text: string) => {
    createTodo({ variables: { todo: text } });
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo({ variables: { id, data: true } });
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo({ variables: { id } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Personal Task Manager</h1>
        <AddTodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={data?.todos || []}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
