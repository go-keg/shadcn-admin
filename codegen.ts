import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:9001/query',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql/': {
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
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config