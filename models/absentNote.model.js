import mongoose from "mongoose";

const AbsentNoteSchema = new mongoose.Schema(
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
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AbsentNote = mongoose.model("AbsentNote", AbsentNoteSchema);

export default AbsentNote;
