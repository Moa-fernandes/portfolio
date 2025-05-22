import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'lbjet0jt',
  dataset: 'production',
  apiVersion: '2023-05-22',
  useCdn: true,
})

export async function fetchProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    title,
    description,
    link
  }`

  return await client.fetch(query)
}
