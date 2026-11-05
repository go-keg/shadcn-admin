import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:9001/query',
  documents: ['src/graphql/example/**/*.tsx'],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql/example/': {
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
    './src/graphql/example/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config