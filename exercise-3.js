// Sort ข้อมูลทั้งหมดด้วย Property total_price  จากมากไปน้อย
db.pizzaOrders.find({}, { total_price: 1 }).sort({ total_price: -1 });
// Sort ข้อมูลทั้งหมดด้วย Property created_at จากวันที่เก่าที่สุดไปใหม่ที่สุด
db.pizzaOrders
  .find(
    {},
    {
      created_at: 1,
    }
  )
  .sort({
    created_at: 1,
  });
