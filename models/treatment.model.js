import mongoose from "mongoose";

const TreatmentSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    inspectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Inspection",
    },
    type: {
      type: String,
      required: true,
      enum: ["sudas", "bulchin", "boolt", "UVCH", "Solux", "Bumba"],
    },
    frequency: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Treatment = mongoose.model("Treatment", TreatmentSchema);

export default Treatment;
