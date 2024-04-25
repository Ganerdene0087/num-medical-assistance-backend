const inspectionTypeDef = `#graphql
    type Inspection {
        _id: ID!
        cliendId: ID!
        appointmentId: ID!
        diagnosis: String!
        prescription: [String]
    }

    type Query {
        inspections: [Inspection!]
        inspection(inspectionId: ID!): Inspection
    }

    type Mutation {
        createInspection(input: CreateInspectionInput): Inspection!
        updateInspection(input: UpdateInspectionInput): Inspection!
        deleteInspection(inspectionId: ID!): Inspection!
    }

    input CreateInspectionInput {
        cliendId: ID!
        appointmentId: ID!
        diagnosis: String!
        prescription: [String]
    } 
     
    input UpdateInspectionInput {
        _id: ID!
        cliendId: ID!
        appointmentId: ID!
        diagnosis: String!
        prescription: [String]
    }
  
`;

export default inspectionTypeDef;
