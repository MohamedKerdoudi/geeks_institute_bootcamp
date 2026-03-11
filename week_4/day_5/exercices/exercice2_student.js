const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

studentSchema.pre('save', function(next) {
  this.updatedAt = Date.now(); 
  next();
});

const Student = mongoose.model('Student', studentSchema);
const runStudentExample = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

  const student = new Student({ name: 'Sara' });
  await student.save();

  console.log(student.updatedAt); 
  student.name = 'Sara Ali';
  await student.save();

  console.log(student.updatedAt); 

  await mongoose.disconnect();
};

runStudentExample();
//output:
// 2024-06-01T12:00:00.000Z (initial save timestamp)
// 2024-06-01T12:05:00.000Z (updated save timestamp)