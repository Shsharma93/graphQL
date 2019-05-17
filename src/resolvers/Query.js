const Query = {
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(post => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase());

      return isTitleMatch || isBodyMatch;
    });
  },

  comments: (parent, args, { db }, info) => {
    return db.comments;
  },

  me: (parent, args, ctx, info) => {
    return {
      id: '12345',
      name: 'Shashank',
      age: 26
    };
  },

  post: (parent, args, ctx, info) => {
    return {
      id: '1234',
      title: 'GraphQL',
      body: 'Welcome to GraphQL bootcamp',
      published: true
    };
  }
};

export { Query as default };
