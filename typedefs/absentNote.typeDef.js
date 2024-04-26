const absentNoteTypeDef = `#graphql
    type AbsentNote {
        _id: ID!
        clientId: ID!
        inspectionId: ID!
        start_date: String!
        end_date: String!
        reason: String!
    }

    type Query {
        absentNotes: [AbsentNote!]
        absentNotesByClient(clientId: ID!): [AbsentNote!]
    }

    type Mutation {
        createAbsentNote(input: CreateAbsentNoteInput): AbsentNote!
        deleteAbsentNote(absentId: ID!): AbsentNote!
    }

    input CreateAbsentNoteInput {
        clientId: ID!
        start_date: String!
        end_date: String!
        reason: String!
        inspectionId: ID!
    }
  
`;

export default absentNoteTypeDef;
