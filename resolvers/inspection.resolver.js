import Inspection from "../models/inspection.model.js";

const inspectionResolver = {
  Query: {
    inspections: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const userRole = await context.getUser().role;

        const inspections =
          userRole === "client"
            ? await Inspection.find({ clientId: userId })
            : await Inspection.find({});

        return inspections;
      } catch (err) {
        console.error("Error getting inspections: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    inspection: async (_, { inspectionId }) => {
      try {
        const inspecion = await Inspection.findById(inspectionId);
        return inspecion;
      } catch (err) {
        console.error("Error getting inspection: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
  },
  Mutation: {
    createInspection: async (_, { input }, context) => {
      try {
        const newInspection = new Inspection({
          ...input,
          clientId: context.getUser()._id,
        });
        await newInspection.save();
        return newInspection;
      } catch (err) {
        console.error("Error creating inspection: ", err);
        throw new Error("Үзлэгийн цаг захиалахад алдаа гарлаа");
      }
    },
    updateInspection: async (_, { input }) => {
      try {
        const updatedInspection = await Inspection.findByIdAndUpdate(
          input._id,
          input,
          {
            new: true,
          }
        );
        return updatedInspection;
      } catch (err) {
        console.error("Error updating inspection: ", err);
        throw new Error("Үзлэг шинэчлэхэд алдаа гарлаа");
      }
    },
    deleteInspection: async (_, { inspecionId }) => {
      try {
        const deletedInspection = await Inspection.findByIdAndDelete(
          inspecionId
        );
        return deletedInspection;
      } catch (err) {
        console.error("Error deleting inspection: ", err);
        throw new Error("Үзлэгийн цаг устгахад алдаа гарлаа");
      }
    },
  },
};

export default inspectionResolver;
