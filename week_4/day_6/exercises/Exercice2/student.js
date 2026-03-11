//Define Schema with updatedAt
const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});
studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});
const Student = mongoose.model('Student', studentSchema);
const student = new Student({ name: "Ali" });

await student.save();

console.log(student);
