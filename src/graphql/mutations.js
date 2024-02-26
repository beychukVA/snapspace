/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      planId
      title
      image
      createdAt
      summary
      activeAreaIndex
      internalAreaValue
      desksValue
      peopleValue
      summaryArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      requirementsArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      planId
      title
      image
      createdAt
      summary
      activeAreaIndex
      internalAreaValue
      desksValue
      peopleValue
      summaryArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      requirementsArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      planId
      title
      image
      createdAt
      summary
      activeAreaIndex
      internalAreaValue
      desksValue
      peopleValue
      summaryArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      requirementsArray {
        id
        title
        items {
          id
          title
          value
        }
      }
      owner
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
