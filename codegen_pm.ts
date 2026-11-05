import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://v2-api-qa.tbanx.cn/pm/query',
  documents: ['src/graphql/pm/**/*.tsx'],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql/pm/': {
      preset: 'client',
      plugins: ['./codegen-enum-map-plugin.js'],
      config: {
        useTypeImports: true,
      },
      presetConfig: {
        fragmentMasking: false,
        persistedDocuments: false,
      },
    },
    './src/graphql/pm/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config