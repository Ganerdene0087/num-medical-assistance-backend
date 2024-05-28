const inspectionTypeDef = `#graphql
    type Inspection {
        _id: ID!
        clientId: ID!
        date: String!
        diagnosis: String!
        prescription: String
    }

    type Query {
        inspections: [Inspection!]
        inspection(inspectionId: ID!): Inspection
        upcomingInspections(date: String!): [Inspection!]!
        pastInspections(date: String!): [Inspection!]!
    }

    type Mutation {
        createInspection(input: CreateInspectionInput): Inspection!
        updateInspection(input: UpdateInspectionInput): Inspection!
        deleteInspection(inspectionId: ID!): Inspection!
    }

    input CreateInspectionInput {
        date: String!
        diagnosis: String!
        prescription: String!
    } 
     
    input UpdateInspectionInput {
        _id: ID!
        date: String!
        diagnosis: String!
        prescription: String
    }
  
`;

export default inspectionTypeDef;
