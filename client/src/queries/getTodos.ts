// src/queries/getTodos.ts
import { gql } from '@apollo/client';

// Query to fetch all todos
export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      todo
      completed
      created_at
    }
  }
`;
