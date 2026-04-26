// lib/queries/projects.js
import { gql } from "graphql-request";

// GraphQL query for the Project content type
export const PROJECT_QUERY = gql`
  query ProjectQuery {
    projectCollection {
      items {
        title
        slug
        date
        heroImage {
          url
        }
        keyQuote
        summary
        software
        role
        testimonial
      }
    }
  }
`;

// Function to fetch the data
export async function getProjectData(client) {
  const data = await client.request(PROJECT_QUERY);
  return data.projectCollection.items; // return the collection items
}