import { client } from '../cms/sanityClient'

export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    link
  }`

  const data = await client.fetch(query)
  return data
}
