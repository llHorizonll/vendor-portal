import axios from "axios";
import { defer } from "react-router-dom";

export async function getContactsList({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (q) {
    const { data } = await axios.get(`https://dummyjson.com/users/search?q=${q}`);
    const contactList = data;
    return { contactList, q };
  } else {
    const { data } = await axios.get(`https://dummyjson.com/users`);
    const contactList = data;
    return { contactList };
  }
}

export async function getContactsById({ params }) {
  const { data } = await axios.get(`https://dummyjson.com/users/${params.id}`);
  const contact = data;
  return defer({ contact });
}
