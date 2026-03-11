import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: { 
    type: String, 
    required: [true, "You must provide a task title"] 
  },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'completed'], 
    default: 'pending' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});
//output: ValidationError: Task validation failed: title: You must provide a task title
const Task = model('Task', taskSchema);
await Task.create({ description: "No title here" });
await Task.create({
  title: "Test",
  status: "done"
});//output: ValidationError: Task validation failed: status:
//  `done` is not a valid enum value for path `status`.
const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(
    taskId,
    { status: 'completed' },
    { new: true, runValidators: true }
  );
  console.log("🚀 Task marked as completed!");
};