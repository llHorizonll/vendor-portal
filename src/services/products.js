import axios from "axios";
import { defer, redirect } from "react-router-dom";

export async function getProductList({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (q) {
    const { data } = await axios.get(`https://dummyjson.com/product/search?q=${q}`);
    const productList = data;
    return { productList };
  } else {
    const { data } = await axios.get(`https://dummyjson.com/product`);
    const productList = data;
    return { productList };
  }
}

export async function getProductById({ params }) {
  if (params.catalogueId === "0") {
    //temp model for create
    const product = {};
    return defer({ product, params });
  } else {
    const { data } = await axios.get(`https://dummyjson.com/product/${params.catalogueId}`);
    const product = data;
    return defer({ product, params });
  }
}
export async function updateProduct({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates, params.catalogueId);
  await axios.put(`https://dummyjson.com/users/${params.catalogueId}`, updates);
  return redirect(`/contacts/${params.catalogueId}`);
}
