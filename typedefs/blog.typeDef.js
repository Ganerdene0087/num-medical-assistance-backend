const blogTypeDef = `#graphql
    type Blog {
        _id: String!
        authorId: ID!
        date: String!
        title: String!
        content: String!
        thumb: String!
    }

    type Query {
        blogs: [Blog!]
        blog(blogId: ID!): Blog
    }

    type Mutation {
        createBlog(input: CreateBlogInput): Blog!
        updateBlog(input: UpdateBlogInput): Blog!
        deleteBlog(blogId: ID!): Blog!
    }

    input CreateBlogInput {
        authorId: ID!
        date: String!
        title: String!
        content: String!
        thumb: String!
    }

    input UpdateBlogInput {
        blogId: String!
        authorId: ID!
        date: String!
        title: String!
        content: String!
        thumb: String!
    }

  
`;

export default blogTypeDef;
