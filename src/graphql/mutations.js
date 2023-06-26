/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBigTask = /* GraphQL */ `
  mutation CreateBigTask(
    $input: CreateBigTaskInput!
    $condition: ModelBigTaskConditionInput
  ) {
    createBigTask(input: $input, condition: $condition) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBigTask = /* GraphQL */ `
  mutation UpdateBigTask(
    $input: UpdateBigTaskInput!
    $condition: ModelBigTaskConditionInput
  ) {
    updateBigTask(input: $input, condition: $condition) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBigTask = /* GraphQL */ `
  mutation DeleteBigTask(
    $input: DeleteBigTaskInput!
    $condition: ModelBigTaskConditionInput
  ) {
    deleteBigTask(input: $input, condition: $condition) {
      id
      job
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
