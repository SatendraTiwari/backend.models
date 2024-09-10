import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  qulifacation: {
    type: String,
    required: true,
  },
  exprienceInYears: {
    type: Number,
    default: 0,
  },
  worksInHospitals: [
    {
      type: mongoose.schema.Type.ObjectId,
      ref: 'Hospital'
    },
  ]
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);
