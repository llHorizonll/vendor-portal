import axios from "axios";
import { defer, redirect } from "react-router-dom";

export async function getContactsList({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (q) {
    const { data } = await axios.get(`https://dummyjson.com/users/search?q=${q}`);
    const contactList = data;
    return { contactList };
  } else {
    const { data } = await axios.get(`https://dummyjson.com/users`);
    const contactList = data;
    return { contactList };
  }
}

export async function getContactsById({ params }) {
  if (params.contactId === "0") {
    //temp model for create
    const contact = {};
    return defer({ contact, params });
  } else {
    const { data } = await axios.get(`https://dummyjson.com/users/${params.contactId}`);
    const contact = data;
    return defer({ contact, params });
  }
}
export async function updateContact({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates, params.contactId);
  await axios.put(`https://dummyjson.com/users/${params.contactId}`, updates);
    return redirect(`/contacts/${params.contactId}`);
}

// export async function createOrUpdateContact(formData, params) {
//   if (params.contactId === "0") {
//     console.log(formData, "data before add");
//     const { data } = await axios.post(`https://dummyjson.com/users/add`, formData);
//     return redirect(`/contacts/${data.id}`);
//   } else {
//     console.log(formData, "data before update");
//     const { data, status } = await axios.put(`https://dummyjson.com/users/${params.contactId}`, formData);
//     console.log(data, status);

//     return redirect(`/contacts/${params.contactId}`, status);
//   }
// }
