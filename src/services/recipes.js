import api from './api'

export async function getRecipes(type, count) {
  const response = await api.get(`/natal-em-receitas/recipes/${type}/${count}`)
  return response.data
}

export async function getRecipe(id) {
  const response = await api.get(`/natal-em-receitas/recipe/${id}`)
  return response.data
}
export async function searchRecipe(search) {
  const response = await api.get(`/natal-em-receitas/introductions/${search}`)
  return response.data
}
