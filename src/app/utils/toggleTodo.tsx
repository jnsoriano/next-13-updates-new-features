import { prisma } from "../db";

const toggleTodo = async (id: string, complete: boolean) => {
    "use server";
    await prisma.todo.update({ where: { id }, data: { complete } });
};

export default toggleTodo;
