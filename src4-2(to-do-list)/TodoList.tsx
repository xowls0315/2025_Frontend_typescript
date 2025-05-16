"use client";

import { Button } from "@mui/material";

type TodoListProps = {
  todos: string[];
  onComplete: (index: number) => void;
};

const TodoList = ({ todos, onComplete }: TodoListProps) => {
  return (
    <div className="w-96 h-96 bg-white rounded-xl border p-6">
      <h2 className="text-2xl font-semibold mb-4">🤦‍♂️ Todo List</h2>
      <hr className="mb-4" />
      {todos.map((todo, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <span>{todo}</span>
          <Button variant="contained" onClick={() => onComplete(index)}>
            완료
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
