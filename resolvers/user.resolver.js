import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const userResolver = {
  Query: {
    users: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (err) {
        console.error("Error on users query: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
    authUser: async (_, __, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.error("Error on authUser: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (err) {
        console.error("Error on user query: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const {
          username,
          firstName,
          lastName,
          password,
          address,
          phone,
          registerNumber,
          sisiId,
          age,
          gender,
          role,
        } = input;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          username,
          firstName,
          lastName,
          password: hashedPassword,
          address,
          phone,
          registerNumber,
          sisiId,
          age,
          gender,
          role,
        });
        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (err) {
        console.error("Error on signUp: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },

    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });

        await context.login(user);
        return user;
      } catch (err) {
        console.error("Error on login: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },

    logout: async (_, __, context) => {
      try {
        await context.logout();
        req.session.destroy((err) => {
          if (err) throw err;
        });
        res.clearCookie("connect.sid");

        return { message: "Logged out successfully" };
      } catch (err) {
        console.error("Error on login: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
};

export default userResolver;
