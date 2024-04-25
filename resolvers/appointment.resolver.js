import Appointment from "../models/appointment.model.js";

const appointmentResolver = {
  Query: {
    appointments: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const userRole = await context.getUser().role;

        const appointments =
          userRole === "doctor"
            ? await Appointment.find({})
            : await Appointment.find({ clientId: userId });

        return appointments;
      } catch (err) {
        console.error("Error getting appointments: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    appointment: async (_, { appointmentId }) => {
      try {
        const appointment = await Appointment.findById(appointmentId);
        return appointment;
      } catch (err) {
        console.error("Error getting appointments: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
  },
  Mutation: {
    createAppointment: async (_, { input }, context) => {
      try {
        const newAppointment = new Appointment({
          ...input,
          clientId: context.getUser()._id,
        });
        await newAppointment.save();
        return newAppointment;
      } catch (err) {
        console.error("Error creating appointment: ", err);
        throw new Error("Цаг захиалахад алдаа гарлаа");
      }
    },
    deleteAppointment: async (_, { appointmentId }) => {
      try {
        const deletedAppointment = await Appointment.findByIdAndDelete(
          appointmentId
        );
        return deletedAppointment;
      } catch (err) {
        console.error("Error deleting appointment: ", err);
        throw new Error("Цаг захиалга устгахад алдаа гарлаа");
      }
    },
  },
};

export default appointmentResolver;
