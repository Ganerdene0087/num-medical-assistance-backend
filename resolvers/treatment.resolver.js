import Treatment from "../models/treatment.model.js";

const treatmentResolver = {
  Query: {
    treatments: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const userRole = await context.getUser().role;

        const treatments =
          userRole === "client"
            ? await Treatment.find({ clientId: userId })
            : await Treatment.find({});

        return treatments;
      } catch (err) {
        console.error("Error getting treatments: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    treatment: async (_, { treatmentId }) => {
      try {
        const treatment = await Treatment.findById(treatmentId);
        return treatment;
      } catch (err) {
        console.error("Error getting treatment: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    treatmentsByInspection: async (_, { inspectionId }) => {
      try {
        const treatments = await Treatment.find({ inspectionId: inspectionId });
        return treatments;
      } catch (err) {
        console.error("Error getting treatments: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    treatmentsByIsDone: async (_, { isDone }, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const userRole = await context.getUser().role;

        const treatments =
          userRole === "client"
            ? await Treatment.find({ clientId: userId, isDone: isDone })
            : await Treatment.find({ isDone: isDone });

        return treatments;
      } catch (err) {
        console.error("Error getting treatments: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
  },
  Mutation: {
    createTreatment: async (_, { input }, context) => {
      try {
        const newTreatment = new Treatment({
          ...input,
          isDone: false,
        });
        await newTreatment.save();
        return newTreatment;
      } catch (err) {
        console.error("Error creating treatment: ", err);
        throw new Error("Эмчилгээ үүсгэхэд алдаа гарлаа");
      }
    },

    updateTreatment: async (_, { input }) => {
      try {
        const updatedTreatment = await Treatment.findByIdAndUpdate(
          input._id,
          input,
          {
            new: true,
          }
        );
        return updatedTreatment;
      } catch (err) {
        console.error("Error updating treatment: ", err);
        throw new Error("Эмчилгээ шинэчлэхэд алдаа гарлаа");
      }
    },
    deleteTreatment: async (_, { treatmentId }) => {
      try {
        const deletedTreatment = await Treatment.findByIdAndDelete(treatmentId);
        return deletedTreatment;
      } catch (err) {
        console.error("Error deleting inspection: ", err);
        throw new Error("Эмчилгээ устгахад алдаа гарлаа");
      }
    },
  },
};

export default treatmentResolver;
