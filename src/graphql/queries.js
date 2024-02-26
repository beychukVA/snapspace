/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
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
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        requirementsArray {
          id
          title
        }
        owner
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
        requirementsArray {
          id
          title
        }
        owner
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
