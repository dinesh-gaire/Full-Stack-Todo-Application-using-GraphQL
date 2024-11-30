// src/queries/mutations.ts
import { gql } from '@apollo/client';

// Mutation to create a new todo
export const CREATE_TODO = gql`
  mutation CreateTodo($todo: String!) {
    createTodo(todo: $todo) {
      id
      todo
      completed
      created_at
    }
  }
`;

// Mutation to update a todo (change task text)
export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: Int!, $todo: String!) {
    updateTodo(id: $id, todo: $todo) {
      message
    }
  }
`;

// Mutation to toggle a todo's completion status
export const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: Int!, $data: Boolean!) {
    toggleComplete(id: $id, data: $data) {
      message
    }
  }
`;

// Mutation to delete a todo
export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      message
    }
  }
`;
