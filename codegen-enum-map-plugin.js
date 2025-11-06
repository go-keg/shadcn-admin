// codegen-enum-map-plugin.js
export const plugin = (schema) => {
  const enums = []
  for (const [name, type] of Object.entries(schema.getTypeMap())) {
    if (type.astNode?.kind === 'EnumTypeDefinition') {
      const items = type.getValues().filter(v => !!v.description).map(v => {
        const desc = v.astNode?.description?.value ?? ''
        return `  ${v.name}: ${JSON.stringify(desc)},`
      })
      if (items.length > 0) {
        enums.push(`export const ${name}Map = {\n${items.join('\n')}\n} as const;`)
      }
    }
  }
  return enums.join('\n\n')
}