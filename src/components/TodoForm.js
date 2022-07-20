import { useState } from "react";
import { Input } from "@chakra-ui/react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Don't forget to do ..."
          size="md"
          id="outlined-basic"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
export default TodoForm;
