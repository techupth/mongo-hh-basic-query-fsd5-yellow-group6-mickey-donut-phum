const totalPrice = db.pizzaOrders.find({}).sort({ total_price: -1 });
const created = db.pizzaOrders.find({}).sort({ created_at: 1 });