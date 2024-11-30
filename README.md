# 📝 Full-Stack Todo Application

## 🌟 Overview

A powerful, modern Todo application that seamlessly integrates cutting-edge web technologies to provide a smooth task management experience. Built with GraphQL, React, and Tailwind CSS, this app offers a robust and responsive solution for tracking your daily tasks.

## ✨ Key Features

- **📋 Task Management**
  - Effortlessly add new tasks to your todo list
  - Quickly toggle task completion status
  - Easily delete tasks you no longer need

- **🚀 Advanced Technology Stack**
  - GraphQL-powered backend for flexible data querying
  - Fully responsive design using Tailwind CSS
  - TypeScript for enhanced code quality and type safety

## 🛠 Tech Stack

### Backend
- **Language & Framework**
  - Node.js with TypeScript
  - Express.js web framework
  - Apollo Server for GraphQL API

- **Database & ORM**
  - PostgreSQL database
  - Prisma ORM for seamless data management
  - Nodemon for efficient development workflow

### Frontend
- **Core Technologies**
  - React with TypeScript
  - Vite build tool
  - Apollo Client for GraphQL interactions
  - Tailwind CSS for styling
  - ESLint for code quality and consistency

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- PostgreSQL database
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/dinesh-gaire/Todo-Application-using-GraphQL.git
cd Todo-Application-using-GraphQL
```

### 2. Backend Setup
#### Install Dependencies
```bash
cd server
npm install
```

#### Configure Environment
Create a `.env` file in the `server` directory:
```bash
PORT=
DATABASE_URL=postgresql://username:password@localhost:5432/todoapp
```

#### Database Migrations
```bash
npx prisma migrate dev
```

#### Run the Server
- Development Mode:
  ```bash
  npm run dev
  ```
- Production Mode:
  ```bash
  npm run build
  npm start
  ```

### 3. Frontend Setup
#### Install Dependencies
```bash
cd client
npm install
```

#### Configure Apollo Client
Create `src/apolloClient.ts`:
```typescript
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
```

#### Start Development Server
```bash
npm run dev
```

## 🔍 GraphQL API Reference

### Queries
- **Get All Todos**
  ```graphql
  query {
    todos {
      id
      todo
      completed
      created_at
    }
  }
  ```

- **Get Todo by ID**
  ```graphql
  query GetTodo($id: Int!) {
    getTodo(id: $id) {
      id
      todo
      completed
      created_at
    }
  }
  ```

### Mutations
- **Create Todo**
  ```graphql
  mutation CreateTodo($todo: String!) {
    createTodo(todo: $todo) {
      id
      todo
      completed
      created_at
    }
  }
  ```

- **Update Todo**
  ```graphql
  mutation UpdateTodo($id: Int!, $todo: String!) {
    updateTodo(id: $id, todo: $todo) {
      message
    }
  }
  ```

- **Toggle Todo Completion**
  ```graphql
  mutation ToggleComplete($id: Int!, $data: Boolean!) {
    toggleComplete(id: $id, data: $data) {
      message
    }
  }
  ```

- **Delete Todo**
  ```graphql
  mutation DeleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      message
    }
  }
  ```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgements

- Tailwind CSS
- GraphQL
- Prisma
- PostgreSQL
- React
- TypeScript

**Happy Task Managing! 🎉**
