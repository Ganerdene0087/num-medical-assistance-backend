import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
