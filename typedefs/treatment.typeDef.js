const treatmentTypeDef = `#graphql
    type Treatment {
        _id: ID!
        clientId: ID!
        inspectionId: ID!
        type: String!
        frequency: Int!
        isDone: Boolean
    }

    type Query {
        treatments: [Treatment!]
        treatmentsByInspection(inspectionId: ID!): [Treatment!]
        treatment(treatmentId: ID!): Treatment
        treatmentsByIsDone(isDone: Boolean!): [Treatment!]  
    }

    type Mutation {
        createTreatment(input: CreateTreatmentInput): Treatment!
        updateTreatment(input: UpdateTreatmentInput): Treatment!
        deleteTreatment(treatmentId: ID!): Treatment!
    }

    input CreateTreatmentInput {
        inspectionId: ID!
        clientId: ID!
        type: String!
        frequency: Int!
    } 

    input UpdateTreatmentInput{
        _id: ID!
        clientId: ID!
        inspectionId: ID!
        type: String!
        frequency: Int!
        isDone: Boolean
    }

  
`;

export default treatmentTypeDef;
