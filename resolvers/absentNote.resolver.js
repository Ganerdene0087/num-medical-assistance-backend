import AbsentNote from "../models/absentNote.model.js";

const absentNoteResolver = {
  Query: {
    absentNotes: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;
        const userRole = await context.getUser().role;

        const absentNotes =
          userRole === "client"
            ? await AbsentNote.find({ clientId: userId })
            : await AbsentNote.find({});

        return absentNotes;
      } catch (err) {
        console.error("Error getting absents: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    absentNote: async (_, { absentNoteId }) => {
      try {
        const absentNote = await AbsentNote.findById(absentNoteId);
        return absentNote;
      } catch (err) {
        console.error("Error getting absent: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    absentNotesByInspection: async (_, inspectionId) => {
      try {
        const absentNote = await AbsentNote.find({
          inspectionId: inspectionId,
        });
        return absentNote;
      } catch (err) {
        console.error("Error getting absentNote: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
  },
  Mutation: {
    createAbsentNote: async (_, { input }, context) => {
      try {
        const newAbsentNote = new AbsentNote({
          ...input,
          clientId: context.getUser()._id,
        });
        await newAbsentNote.save();
        return newAbsentNote;
      } catch (err) {
        console.error("Error creating absentNote: ", err);
        throw new Error("Акт үүсгэхэд алдаа гарлаа");
      }
    },
    deleteAbsentNote: async (_, { absentNoteId }) => {
      try {
        const deletedAbsentNote = await AbsentNote.findByIdAndDelete(
          absentNoteId
        );
        return deletedAbsentNote;
      } catch (err) {
        console.error("Error deleting inspection: ", err);
        throw new Error("Эмчилгээ устгахад алдаа гарлаа");
      }
    },
  },
};

export default absentNoteResolver;
