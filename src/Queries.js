import gql from "graphql-tag";

export const ALL_RECIPEES = gql`
  query {
    allRecipees {
      id
      title
      description
      ingredients
      preparation
    }
  }
`;

export const RECIPEE = gql`
  query Recipee($id: ID) {
    Recipee(id: $id) {
      id
      title
      description
      ingredients
      preparation
    }
  }
`;
