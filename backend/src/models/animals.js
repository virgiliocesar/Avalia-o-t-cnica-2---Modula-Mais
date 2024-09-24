import mongoose from "mongoose";

const { Schema } = mongoose;
const AnimalsSchema = new Schema({
    name: {
        type: String,
        required: true
  },
    age: {
        type: Number,
        required: true
  },
    weight: {
        type: Number,
        required: true
  },
  status: {
      type: String,
      required: true
  },
  habitat: {
      type: String,
      required: true
  },
  behavior: {
      type: String,
  },
  diet: {
      type: String,
  },
    observations: {
      type: String,
  }
},
//* salva data de criação e de atualização de registro
    { timestamps: true });

const Animals = mongoose.model("Animals", AnimalsSchema);
export default  Animals