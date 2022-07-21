import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
function Todo({ todo, index, completeTodo, removeTodo, updateTodo, onClose }) {
  const initRef = React.useRef();
  return (
    <div>
      <Checkbox
        sx={{ marginRight: "15px" }}
        onClick={() => completeTodo(index)}
      >
        {todo.text}
      </Checkbox>
      <Popover>
        <PopoverTrigger>
          <DeleteIcon />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Do you want to delete</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Button
                sx={{ marginRight: "5px" }}
                onClick={() => {
                  removeTodo(index);
                  onClose();
                }}
                colorScheme="blue"
              >
                Yes
              </Button>
              <Button
                ref={initRef}
                colorScheme="red"
                onClick={() => {
                  onClose();
                  console.log("tamamda niye ordasın");
                }}
              >
                No
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}
export default Todo;
