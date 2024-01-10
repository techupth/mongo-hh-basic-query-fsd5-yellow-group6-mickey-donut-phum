const orderLessThen5 = db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

const orderSmallLessThen5 = db.pizzaOrders.find({
  $and: [{ quantity: { $lte: 5 } }, { size: "small" }],
});

const payNotCreditCard = db.pizzaOrders.find({
  $and: [{ quantity: { $gt: 10 } }, { credit_card_type: null }],
});