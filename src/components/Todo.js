import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <Checkbox onClick={() => completeTodo(index)}>{todo.text}</Checkbox>
    </div>
  );
}
export default Todo;
