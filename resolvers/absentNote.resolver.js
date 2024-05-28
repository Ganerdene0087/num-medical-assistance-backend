import AbsentNote from "../models/absentNote.model.js";

const absentNoteResolver = {
  Query: {
    absentNote: async (_, { absentNoteId }) => {
      try {
        const absentNote = await AbsentNote.findById(absentNoteId);
        return absentNote;
      } catch (err) {
        console.error("Error getting absent: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    absentNoteByInspection: async (_, { inspectionId }) => {
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

    absentNoteByClient: async (_, { clientId }) => {
      try {
        const absentNote = await AbsentNote.find({
          clientId: clientId,
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
        console.error("Error deleting absentNote: ", err);
        throw new Error("Акт устгахад алдаа гарлаа");
      }
    },
  },
};

export default absentNoteResolver;
