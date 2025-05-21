import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'lbjet0jt',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-05-20',
});

export const fetchProjects = async () => {
  const query = `*[_type == "project"]{title, description, link}`;
  return await client.fetch(query);
};
