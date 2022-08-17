// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "";

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, slug, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHQL_TOKEN || ""}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    name,
    email,
    comment,
    slug,
  });

  return res.status(200).json(result);
}
