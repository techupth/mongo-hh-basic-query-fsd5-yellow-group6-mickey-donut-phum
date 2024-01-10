const updateMany = db.pizzaOrders.updateMany({customer_name: "Jack"},{ $set: {"isAdmin": false}})
const updateOne = db.pizzaOrders.updateMany(
  {},
  { $set: { country: "Thailand" } }
);
const updateM = db.pizzaOrders.updateOne(
  { customer_name: "M" },
  {
    $set: {
      size: "large",
      total_price: 200000,
      quantity: 20,
      customer_name: "M",
      credit_card_type: "mastercard",
      created_at: "2022-01-01T10:48:40Z",
    },
  },
  {
    upsert: true,
  }
);