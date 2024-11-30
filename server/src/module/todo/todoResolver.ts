import prisma from "../../config/database.js";

const todoResolver = {
  Query: {
    todos: async () => await prisma.todo.findMany({ orderBy: { id: "desc" } }),
    getTodo: async (_, { id }) =>
      await prisma.todo.findUnique({ where: { id: id } }),
  },

  Mutation: {
    createTodo: async (_, { todo }) => {
      const newTodo = await prisma.todo.create({
        data: {
          todo: todo,
          completed: false,
        },
      });
      return newTodo;
    },
    updateTodo: async (_, { id, todo }) => {
      await prisma.todo.update({
        data: {
          todo: todo,
        },
        where: {
          id: id,
        },
      });

      return { message: "Todo updated successfully!" };
    },
    toggleComplete: async (_, { id, data }) => {
      await prisma.todo.update({
        data: {
          completed: data,
        },
        where: {
          id: id,
        },
      });

      return { message: "Todo updated successfully!" };
    },
    deleteTodo: async (_, { id}) => {
        await prisma.todo.delete({
          where: {
            id: id
          }
        });
  
        return { message: "Todo deleted successfully!" };
      },
  },
};

export default todoResolver;
