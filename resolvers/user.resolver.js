import { userDummy } from "../dummyData/userDummy.js";

const userResolver = {
  Query: {
    users: () => {
      return userDummy;
    },
    user: (_, { userId }) => {
      return userDummy.find((user) => user._id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
