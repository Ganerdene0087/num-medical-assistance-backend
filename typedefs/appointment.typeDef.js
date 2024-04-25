const appointmentTypeDef = `#graphql
    type Appointment {
        _id: String!
        cliendId: ID!
        start_date: String!
        end_date: String!
    }

    type Query {
        appointments: [Appointment!]
        appointment(appointmentId: ID!): Appointment
    }

    type Mutation {
        createAppointment(input: CreateAppointmentInput): Appointment!
        deleteAppointment(appointmentId: ID!): Appointment!
    }

    input CreateAppointmentInput {
        cliendId: ID!
        start_date: String!
        end_date: String!
    }

  
`;

export default appointmentTypeDef;
