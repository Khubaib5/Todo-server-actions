import Image from "next/image";
import AddTodo from "@/components/shared/AddTodo";
import prisma from "@/utils/prisma";
import Todo from "@/components/shared/Todo";
import { todoType } from "@/types/todoTypes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      IsCompleted: true,
    },
    orderBy: {
      createAt:'desc'
    },
  });

  return data;
}
const Home = async ({ todo }: { todo: todoType }) => {
  const data= await getData()
  return (
    <>
    <div className="w-full py-10 flex justify-center items-center flex-col">
      <span className="text-3xl font-extrabold uppercase">Todo App</span>

      <div className="w-full max-w-lg mt-8">
        <AddTodo />
        <div className="mt-6 space-y-6">
          {data.map(todo => (
            <div className="w-full" key={todo.id}>
             <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
