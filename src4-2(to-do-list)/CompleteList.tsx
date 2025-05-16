"use client";

import { Button } from "@mui/material";

type CompleteListProps = {
  completedTodos: string[];
  onDelete: (index: number) => void;
};

const CompleteList = ({ completedTodos, onDelete }: CompleteListProps) => {
  return (
    <div className="w-96 h-96 bg-white rounded-xl border p-6">
      <h2 className="text-2xl font-semibold mb-4">✅ Complete List</h2>
      <hr className="mb-4" />
      {completedTodos.map((todo, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <span>{todo}</span>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(index)}
          >
            삭제
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CompleteList;
