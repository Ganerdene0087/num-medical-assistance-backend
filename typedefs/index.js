import { mergeTypeDefs } from "@graphql-tools/merge";

import absentNoteTypeDef from "./absentNote.typeDef.js";
import blogTypeDef from "./blog.typeDef.js";
import inspectionTypeDef from "./inspection.typeDef.js";
import treatmentTypeDef from "./treatment.typeDef.js";
import userTypeDef from "./user.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([
  absentNoteTypeDef,
  blogTypeDef,
  inspectionTypeDef,
  treatmentTypeDef,
  userTypeDef,
]);

export default mergedTypeDefs;
