import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import appointmentResolver from "./appointment.resolver.js";
import blogResolver from "./blog.resolver.js";
import inspectionResolver from "./inspection.resolver.js";
import treatmentResolver from "./treatment.resolver.js";
import absentNoteResolver from "./absentNote.resolver.js";

const mergedResolvers = mergeResolvers([
  userResolver,
  appointmentResolver,
  blogResolver,
  inspectionResolver,
  treatmentResolver,
  absentNoteResolver,
]);

export default mergedResolvers;
