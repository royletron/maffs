import mongoose from "mongoose";

const LogicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true, unique: true },
  variables: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      required: { type: Boolean, default: true },
    },
  ],
  logic: { type: Object, required: true },
});

export default mongoose.models.Logic || mongoose.model("Logic", LogicSchema);
