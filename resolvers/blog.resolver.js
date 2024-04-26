import Blog from "../models/blog.model.js";

const blogResolver = {
  Query: {
    blogs: async () => {
      try {
        const blogs = await Blog.find({});
        return blogs;
      } catch (err) {
        console.error("Error getting blogs: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
    blog: async (_, { blogId }) => {
      try {
        const blog = await Blog.findById(blogId);
        return blog;
      } catch (err) {
        console.error("Error getting blog: ", err);
        throw new Error("Өгөгдөл дуудахад алдаа гарлаа");
      }
    },
  },
  Mutation: {
    createBlog: async (_, { input }, context) => {
      try {
        const newBlog = new Blog({
          ...input,
          authorId: context.getUser()._id,
        });
        await newBlog.save();
        return newBlog;
      } catch (err) {
        console.error("Error creating blog: ", err);
        throw new Error("Нийтлэл нийтлэхэд алдаа гарлаа");
      }
    },
    updateBlog: async (_, { input }) => {
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(input._id, input, {
          new: true,
        });
        return updatedBlog;
      } catch (err) {
        console.error("Error updating blog: ", err);
        throw new Error("Нийтлэл шинэчлэхэд алдаа гарлаа");
      }
    },
    deleteBlog: async (_, { blogId }) => {
      try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        return deletedBlog;
      } catch (err) {
        console.error("Error deleting appointment: ", err);
        throw new Error("Нийтлэл устгахад алдаа гарлаа");
      }
    },
  },
};

export default blogResolver;
