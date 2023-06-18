import { supabaseClient } from "..";

async function getMany() {
  const query = `
    id,
    title,
    authors(id, description, name),
    description,
    cover,
    score,
    status,
    created_at
  `;

  const { data, error } = await supabaseClient.from("books").select(query);
  if (error) throw error;
  return data;
}

const service = {
  getMany,
};

export default service;
