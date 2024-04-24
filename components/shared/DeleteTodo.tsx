import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import Button from "../ui/Button";
import Form from "../ui/Form";
import { todoType } from "@/types/todoTypes";
import { deleteTodo } from '@/app/actions/todoAction';

const DeleteTodo = ({todo}: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
    <input type="hidden" name="inputId" value={todo.id} />
    <Button
      actionButton
      text={<BsFillTrashFill />}
      type="submit"
    />
  </Form>
  )
}

export default DeleteTodo