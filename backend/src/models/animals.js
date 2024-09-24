import mongoose from "mongoose";

const { schema } = mongoose;
const AnimalsSchema = new schema({
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
      required: false
  },
    diet: {
      required: false
  },
    observations: {
      type: String,
      required: false
  }
},
//* salva data de criação e de atualização de registro
    { timestamps: true });

const Animals = mongoose.model("Animals", AnimalsSchema);
  export default Animals;