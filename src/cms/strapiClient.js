// src/cms/strapiClient.js
export const fetchProjects = async () => {
  const res = await fetch('http://localhost:1337/api/projects?populate=*');
  const json = await res.json();
  return json.data.map(p => ({
    title: p.attributes.title,
    description: p.attributes.description,
    link: p.attributes.link,
  }));
};
