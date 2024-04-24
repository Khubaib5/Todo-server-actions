import { todoStatus } from "@/app/actions/todoAction";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus} className="flex items-center">
    <input
      name="inputId"
      value={todo.id}
      className="hidden w-6"
      type="hidden"
    />
    
  </Form>
  );
};

export default ChangeTodo;