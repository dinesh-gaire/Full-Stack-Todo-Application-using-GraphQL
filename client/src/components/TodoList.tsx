// src/components/TodoList.tsx
export type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    created_at: Date;
  };
  
  interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    return (
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="mr-4 w-6 h-6 accent-blue-500 rounded-full border-2 border-gray-300"
              />
              <span
                className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
              >
                {todo.todo}
              </span>
            </div>
            <button
              onClick={() => onDelete(todo.id)}
              className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;
  