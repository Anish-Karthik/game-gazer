import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!]: {
        headers: {
          // If you have an admin secret set
          "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
        },
      },
    },
  ],
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: "number",
    },
  },
  documents: [
    "lib/service/user.graphql",
    "lib/service/game.graphql",
    "lib/service/review.graphql",
  ],
  generates: {
    "lib/gql/": {
      preset: "client",
      config: {},
      plugins: [],
    },
    "lib/graphql/generated/types-and-hooks.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
}

export default config
