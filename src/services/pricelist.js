import data from "./pricelistdata.json";

//mock api get data price-list
export function getPriceLists() {
  const pricelist = data;
  return { pricelist };
}
//mock api get data price-list by Id
export function getPriceListsById({ params }) {
  const pricelistId = data.find((params) => params.id === params.pricelistId);
  const pricelist = pricelistId;
  return { pricelist, params };
}
