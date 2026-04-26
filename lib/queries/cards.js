// lib/queries/cards.js
import { gql } from "graphql-request";

// GraphQL query for the Card content type
export const CARD_QUERY = gql`
  query CardQuery {
    cardCollection {
      items {
        type
        content
      }
    }
  }
`;

// Function to fetch the data
export async function getCardData(client) {
  const data = await client.request(CARD_QUERY);
  return data.cardCollection.items; // return the collection items
}