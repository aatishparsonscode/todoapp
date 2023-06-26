/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBigTask = /* GraphQL */ `
  query GetBigTask($id: ID!) {
    getBigTask(id: $id) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBigTasks = /* GraphQL */ `
  query ListBigTasks(
    $filter: ModelBigTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBigTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        job
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
