use shopDB

db.products.insertMany([
  { _id: 1, name: "Wireless Mouse", category: "Accessories", price: 800, stock: 50, discontinued: false, oldCode: "WM-01" },
  { _id: 2, name: "Keyboard", category: "Accessories", price: 1500, stock: 30, discontinued: false, oldCode: "KB-02" },
  { _id: 3, name: "USB Cable", category: "Accessories", price: 200, stock: 100, discontinued: false },
  { _id: 4, name: "Laptop", category: "Computers", price: 55000, stock: 10, discontinued: false },
  { _id: 5, name: "Monitor", category: "Computers", price: 12000, stock: 15, discontinued: false },
  { _id: 6, name: "Old Floppy Drive", category: "Computers", price: 300, stock: 0, discontinued: true },
  { _id: 7, name: "Dial-up Modem", category: "Computers", price: 500, stock: 0, discontinued: true },
  { _id: 8, name: "CD Drive", category: "Computers", price: 400, stock: 0, discontinued: true }
])

db.products.updateOne(
  { name: "Keyboard" },
  { $set: { price: 1400 } }
)

db.products.updateOne(
  { name: "Wireless Mouse" },
  { $inc: { stock: 25 } }
)

db.products.updateMany(
  {},
  { $unset: { oldCode: "" } }
)

db.products.replaceOne(
  { _id: 3 },
  {
    _id: 3,
    name: "USB-C Cable",
    category: "Accessories",
    price: 350,
    stock: 100,
    discontinued: false
  }
)

db.products.deleteOne(
  { name: "Old Floppy Drive" }
)

db.products.deleteMany(
  { discontinued: true }
)

db.products.aggregate([
  { $match: { price: { $gte: 500 } } },
  {
    $group: {
      _id: "$category",
      totalStock: { $sum: "$stock" },
      avgPrice: { $avg: "$price" }
    }
  },
  { $sort: { totalStock: -1 } }
])
