const absentNoteTypeDef = `#graphql
    type AbsentNote {
        _id: String!
        clientId: ID!
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
    }
  
`;

export default absentNoteTypeDef;
