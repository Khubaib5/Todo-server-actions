import Edittodo from "./Edittodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-3 px-6 md:px-20 rounded-2xl">
      <div className="flex-grow">
        <ChangeTodo todo={todo} />
        <span
          className="text-center font-bold uppercase mt-2 md:mt-0"
          style={todoStyle}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex items-center mt-4 md:mt-0 md:ml-4 space-x-4">
        <Edittodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
