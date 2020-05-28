import gql from "graphql-tag";

export const ALL_RECIPEES = gql`
  query {
    allRecipees {
      id
      title
      description
    }
  }
`;

export const RECIPEE = gql`
  query recipee($id: Int) {
    recipee(id: $id) {
      title
      description
      ingredientSet {
        description
      }
      preparation
    }
  }
`;
