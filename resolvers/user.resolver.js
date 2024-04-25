import { userDummy } from "../dummyData/userDummy.js";

const userResolver = {
  Query: {
    users: (_, __, { req, res }) => {
      return userDummy;
    },
    user: (_, { userId }, { req, res }) => {
      return userDummy.find((user) => user._id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
