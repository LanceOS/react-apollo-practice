import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      active
      company
      description
      id
    }
  }
`;

export const GET_ROCKET = gql`
  query GetRocket {
    rockets {
      active
      boosters
      company
      cost_per_launch
      country
      description
      diameter {
        meters
        feet
      }
      engines {
        type
        version
        thrust_to_weight
        number
        layout
      }
      id
      height {
        meters
        feet
      }
    }
  }
`;
