const treatmentTypeDef = `#graphql
    type Treatment {
        _id: ID!
        cliendId: ID!
        inspectionId: ID!
        type: String!
        frequency: Int!

    }

    type Query {
        treatments: [Treatment!]
        treatmentByInspection(inspectionId: ID!): Treatment
        treatmentBtClient(clientId: ID!): Treatment
    }

    type Mutation {
        createTreatment(input: CreateTreatmentInput): Treatment!
        updateTreatment(input: UpdateTreatmentInput): Treatment!
        deleteTreatment(treatmentId: ID!): Treatment!
    }

    input CreateTreatmentInput {
        cliendId: ID!
        inspectionId: ID!
        type: String!
        frequence: Int!
    } 

    input UpdateTreatmentInput{
        _id: ID!
        cliendId: ID!
        inspectionId: ID!
        type: String!
        frequency: Int!
    }

  
`;

export default treatmentTypeDef;
