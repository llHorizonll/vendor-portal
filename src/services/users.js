import axios from "axios";

export async function getUserList(q) {
  if (q) {
    const { data } = await axios.get(`https://dummyjson.com/users/search?q=${q}`);
    return data;
  } else {
    const { data } = await axios.get(`https://dummyjson.com/users`);
    return data;
  }
}

export async function getUserById(id) {
  const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
  return data;
}
