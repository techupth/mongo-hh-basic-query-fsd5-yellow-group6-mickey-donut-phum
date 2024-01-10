// Delete ข้อมูล Document ของ Customer ที่มีชื่อว่า Jack ออกทั้งหมด
db.pizzaOrders.deleteMany({ customer_name: "Jack" });
// จากนั้นให้ตรวจสอบด้วยว่าข้อมูล Document ของ Customer ที่มีชื่อว่า Jack ถูกลบออกทั้งหมดจริงๆ
db.pizzaOrders.find({ customer_name: "Jack" });
