//Task A: The "Young Pros" Filter (Age 18–25)
db.students.find({
  age: { $gte: 18, $lte: 25 }
})
//Task B: The Relocation (Update Yassine’s City)
db.students.updateOne(
  { name: "Yassine" },
  { $set: { city: "Casablanca" } }
)
//Task C: The Graduation (Remove Sophia)
db.students.deleteOne({ name: "Sophia" })   
//Boss Level Challenge
db.students.updateMany(
  { major: "AI" },
  { $set: { major: "Generative AI" } }
)