const users = [
  { id: '1', name: 'John', email: 'john@gmail.com', age: '26' },
  { id: '2', name: 'Kien', email: 'kien@gmail.com', age: '20' },
  { id: '3', name: 'Ryan', email: 'ryan@gmail.com', age: '22' },
  { id: '4', name: 'Mitch', email: 'mitch@gmail.com', age: '24' }
];

const posts = [
  {
    id: '10',
    title: 'Good Morning',
    body: 'Good Morning! Have a great day?',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'Good Afternoon',
    body: 'Good Afternoon! Whats going on?',
    published: true,
    author: '4'
  },
  {
    id: '12',
    title: 'Good Evening',
    body: 'Good Evening! Hows your day?',
    published: false,
    author: '2'
  },
  {
    id: '13',
    title: 'Good Night',
    body: 'Good night',
    published: true,
    author: '3'
  }
];

const comments = [
  { id: '32', text: 'Hey, Whatsaupp', author: '3', post: '12' },
  { id: '33', text: 'Winter is coming', author: '2', post: '10' },
  { id: '44', text: 'Just do it', author: '1', post: '11' },
  {
    id: '55',
    text: 'Well Done guys, see you tomorrow',
    author: '1',
    post: '13'
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
