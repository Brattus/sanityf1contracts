import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schema/schema'

export default defineConfig({
  name: 'default',
  title: 'F1 contracts',
  projectId: 'kc309p34',
  dataset: 'production',
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})