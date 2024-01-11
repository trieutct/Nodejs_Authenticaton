import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const CourseSchema = new Schema({
  name: {type:String},
  description: {type:String},
  image: {type:String},
  CreateAt: { type: Date, default: Date.now },
  UpdateAt: { type: Date, default: Date.now },
});

export const Course= model('Course', CourseSchema);
