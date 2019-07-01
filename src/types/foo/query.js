const {
  GraphQLID,
  GraphQLNonNull
} = require("graphql");
const FooType = require("./type");
const FooResolver = require("./resolver");

module.exports = {
  type: FooType,
  description: "An item of Foo",
  args: {
    id: { type: GraphQLNonNull(GraphQLID) }
  },
  resolve: FooResolver
};
