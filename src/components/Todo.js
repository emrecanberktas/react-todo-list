import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
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
      <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <DeleteIcon w="15px" h="15px" />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverHeader>This is the header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Box>
                    Hello. Nice to meet you! This is the body of the popover
                  </Box>
                  <Button
                    mt={4}
                    colorScheme="blue"
                    onClick={onClose}
                    ref={initRef}
                  >
                    Close
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
