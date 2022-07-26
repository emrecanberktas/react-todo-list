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
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "Reading Todos", isCompleted: false },
    { id: uuidv4(), text: "Create new Todos", isCompleted: false },
    { id: uuidv4(), text: "Update Todos", isCompleted: false },
  ]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  // Update Todo
  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? text : item)));
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
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Text>Add A Task</Text>
      </Flex>
      <br></br>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box w="33%">
          <TodoForm addTodo={addTodo} />
        </Box>
        <br></br>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            uncompleteTodo={uncompleteTodo}
            updateTodo={updateTodo}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))}
      </Flex>
    </div>
  );
}

export default App;
