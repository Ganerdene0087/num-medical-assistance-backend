import mongoose from "mongoose";

const InspectionSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    prescription: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Inspection = mongoose.model("Inspection", InspectionSchema);

export default Inspection;
