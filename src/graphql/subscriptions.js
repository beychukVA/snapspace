/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onCreatePlan(filter: $filter, owner: $owner) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onUpdatePlan(filter: $filter, owner: $owner) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan(
    $filter: ModelSubscriptionPlanFilterInput
    $owner: String
  ) {
    onDeletePlan(filter: $filter, owner: $owner) {
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
