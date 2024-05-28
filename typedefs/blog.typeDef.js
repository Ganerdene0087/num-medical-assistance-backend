const blogTypeDef = `#graphql
    type Blog {
        _id: ID!
        authorId: ID!
        title: String!
        content: String!
        thumb: String!
        createdAt: String!
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
        title: String!
        content: String!
        thumb: String!
    }

    input UpdateBlogInput {
        _id: ID!
        title: String!
        content: String!
        thumb: String!
    }

  
`;

export default blogTypeDef;
