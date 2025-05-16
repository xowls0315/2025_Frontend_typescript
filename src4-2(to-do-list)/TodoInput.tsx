"use client";

import { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

type TodoInputProps = {
  onAddTodo: (newTodo: string) => void;
};

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex gap-6 mb-8">
      <Stack
        component="form"
        spacing={2}
        sx={{ width: "700px" }}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Stack>
      <Button
        variant="contained"
        color="success"
        onClick={handleAdd}
        sx={{ fontWeight: "bold", fontSize: "20px" }}
      >
        리스트에 추가
      </Button>
    </div>
  );
};

export default TodoInput;
