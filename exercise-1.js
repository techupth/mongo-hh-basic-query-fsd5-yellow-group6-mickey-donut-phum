const cherlyn = db.pizzaOrders.findOne({ customer_name: "Cherlyn" });
const PayWithMastercard = db.pizzaOrders.find({
  credit_card_type: "mastercard",
});
const mediumSize = db.pizzaOrders.find({ size: "medium" }).limit(5);

