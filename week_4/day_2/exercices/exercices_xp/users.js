//Exercice 1
db.users.insertOne({
  name: "Yasmine",
  email: "yasmine@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000"
  }
})
db.users.find()
//output: { "_id" : ObjectId("64a1b2c3d4e5f67890abcdef"), "name" : "Yasmine", "email" : "}

//Exercice 2
//Task A — Copy Yasmine’s _id
db.users.find()
ObjectId("65f1a23abc4567890def1234")
// Task B — Insert into orders
db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("PASTE_ID_HERE")
})
db.orders.find()
//output: { "_id" : ObjectId("65f1a23abc4567890def5678"), "orderNumber" : "ORD-99X",
//  "total" : 1500, "currency" : "MAD", "status" : "Processing",
//  "userId" : ObjectId("65f1a23abc4567890def1234") }

