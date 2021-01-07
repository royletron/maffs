import mongoose from "mongoose";

const LogicSchema = new mongoose.Schema({
  name: String,
  path: String,
  variableNames: [String],
});

export default mongoose.models.Logic || mongoose.model("Logic", LogicSchema);
