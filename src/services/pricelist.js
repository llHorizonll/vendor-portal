import data from "./pricelistdata.json";

//mock api get data price-list
export function getPriceLists() {
  const pricelist = [];

  for (let index = 1; index <= 50; index++) {
    pricelist.push({
      id: { index },
      message: "Pricelist Master created successfully.",
      pricelist_master: {
        name: "Summer Sale 2023",
        start_date: "2023-07-01",
        end_date: "2023-07-31",
        status: index % 2 === 0 ? "draft" : "publish",
        create_date: "2023-06-28",
        list: "231001",
        items: [
          {
            item_id: "1",
            product_id: "1",
            bulk_quantity: 100,
            price: "25.99",
            unit_id: "1",
            discount_percentage: "10",
            discount_amount: "2.59",
            user_id: "1",
            create_date: "2023-06-28",
            modify_date: "2023-06-28",
          },
        ],
        revisions: [],
        user_id: "1",
        vendor_id: "1",
      },
    });
  }

  return pricelist;
}


//mock api get data price-list by Id
export function getPriceListsById({ params }) {
  // Assuming "data" is an array containing price list objects
  const pricelist = data.find((item) => item.id === params.pricelistId);
  return pricelist, { params };
}

// export function updatePricelists({ req, params }) {
//   const pricelist = data;
//   const formdata = req.formdata();
//   const update = Object.fromEntries(formdata);
// }
