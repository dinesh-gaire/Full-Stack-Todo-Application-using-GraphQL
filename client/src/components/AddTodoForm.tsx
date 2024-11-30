// src/components/AddTodoForm.tsx
import { useState } from "react";
interface AddTodoFormProps {
    onAdd: (text: string) => void;
  }
  
  const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim()) {
        onAdd(text);
        setText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-6 p-4 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>
    );
  };
  
  export default AddTodoForm;
  