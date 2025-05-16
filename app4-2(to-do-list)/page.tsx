"use client";

import CompleteList from "@/src/CompleteList";
import Title from "@/src/Title";
import TodoInput from "@/src/TodoInput";
import TodoList from "@/src/TodoList";
import { useState } from "react";

type Todo = string;

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    const [completedItem] = newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos((prev) => [...prev, completedItem]);
  };

  const deleteComplete = (index: number) => {
    const newCompleted = [...completedTodos];
    newCompleted.splice(index, 1);
    setCompletedTodos(newCompleted);
  };

  return (
    <div className="min-h-screen bg-[#f1f5fd] flex flex-col items-center py-24">
      <Title />
      <TodoInput onAddTodo={addTodo} />
      <div className="flex gap-8">
        <TodoList todos={todos} onComplete={completeTodo} />
        <CompleteList
          completedTodos={completedTodos}
          onDelete={deleteComplete}
        />
      </div>
    </div>
  );
}
