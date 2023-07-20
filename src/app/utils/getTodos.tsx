import { prisma } from "../db"


const getTodos = () => {
  return prisma.todo.findMany()
}

export default getTodos
