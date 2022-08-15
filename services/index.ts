import { request, gql } from "graphql-request";
import { Post } from "../models";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              description
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const results = await request(graphqlAPI as string, query);
  const posts: Post[] = results.postsConnection.edges.map(
    (edge: { node: Post }) => edge.node
  );
  return posts;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }`;
  const results = await request(graphqlAPI as string, query);
  return results.posts;
};

export const getSimilarPosts = async (slug: string, categories: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI as string, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const results = await request(graphqlAPI as string, query);
  console.log(results);
  return results.categories;
};
