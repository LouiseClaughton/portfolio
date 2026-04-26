import { gql } from "graphql-request";
import { client } from "@/lib/graphql";

export const PAGE_QUERY = gql`
  query PageQuery {
    pageCollection {
      items {
        title
        content {
          type
          content
        }
        featuredProjects {
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
        }
      }
    }
  }
`;

export async function getPageData() {
  const data = await client.request(PAGE_QUERY);
  return data.pageCollection.items;
}