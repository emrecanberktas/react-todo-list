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
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <DeleteIcon w="15px" h="15px" />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>
                  Do you want to delete
                  <Text as="samp"> {todo.text}</Text>
                </PopoverHeader>
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
      <EditIcon
        w="15px"
        h="15px"
        marginLeft="5px"
        onClick={() => {
          // updateTodo();
          console.log("tamam da niye ordasın");
        }}
      />
    </div>
  );
}
export default Todo;
