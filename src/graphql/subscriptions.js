/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBigTask = /* GraphQL */ `
  subscription OnCreateBigTask($filter: ModelSubscriptionBigTaskFilterInput) {
    onCreateBigTask(filter: $filter) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBigTask = /* GraphQL */ `
  subscription OnUpdateBigTask($filter: ModelSubscriptionBigTaskFilterInput) {
    onUpdateBigTask(filter: $filter) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBigTask = /* GraphQL */ `
  subscription OnDeleteBigTask($filter: ModelSubscriptionBigTaskFilterInput) {
    onDeleteBigTask(filter: $filter) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
