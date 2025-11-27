import { defineCliConfig } from 'sanity/cli'
import { apiVersion, dataset, projectId } from './env'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})

