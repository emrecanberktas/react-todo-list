import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Portal,
  Text,
  Input,
} from "@chakra-ui/react";
function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
  const initRef = React.useRef();

  return (
    <div>
      <Checkbox
        sx={{ marginRight: "15px" }}
        onClick={() => completeTodo(index)}
      >
        {todo.text}
      </Checkbox>
      <Popover
        closeOnBlur={false}
        placement="right-end"
        initialFocusRef={initRef}
      >
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <DeleteIcon w="15px" h="15px" />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>Do you want to delete</PopoverHeader>
                <PopoverBody>
                  <Text as="samp"> {todo.text}</Text>
                </PopoverBody>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    sx={{ marginRight: "5px" }}
                    colorScheme="blue"
                    onClick={() => {
                      removeTodo(index);
                      onClose();
                    }}
                    ref={initRef}
                  >
                    Yes
                  </Button>
                  <Button
                    ref={initRef}
                    colorScheme="red"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    No
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </div>
  );
}
export default Todo;
