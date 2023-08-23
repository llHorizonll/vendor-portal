import data from "./pricelistdata.json";

//mock api get data price-list
export function getPriceLists() {
  const pricelist = data;
  return { pricelist };
}
//mock api get data price-list by Id
export function getPriceListsById({ params }) {
  // Assuming "data" is an array containing price list objects
  const pricelist = data.find(item => item.id === params.pricelistId);
  return { pricelist, params };
}
