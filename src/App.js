import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import {
  Text,
  Button,
  useColorMode,
  Flex,
  Spacer,
  Heading,
  Box,
} from "@chakra-ui/react";
function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "Reading Todos", isCompleted: false },
    { id: uuidv4(), text: "Create new Todos", isCompleted: false },
    { id: uuidv4(), text: "Update Todos", isCompleted: false },
  ]);

  console.log(todos);

  const { colorMode, toggleColorMode } = useColorMode();

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //Uncomplete Todo
  const uncompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  // Remove Todo
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return true;
      }
      return false;
    });
    setTodos(newTodos);
  };

  // Adding new todos to do list
  const addTodo = (text) => {
    const newTodos = [...todos, { text, id: uuidv4(), isCompleted: false }];
    setTodos(newTodos);
  };

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box>
          <Heading m="5px">TODO APP</Heading>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode} colorScheme="teal" m="10px">
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Text>Add A Task</Text>
      </Flex>
      <br></br>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box w="33%">
          <TodoForm
            addTodo={addTodo}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
        <br></br>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            uncompleteTodo={uncompleteTodo}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))}
      </Flex>
    </div>
  );
}

export default App;
