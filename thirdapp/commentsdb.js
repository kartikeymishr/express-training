const { v4: uuid } = require("uuid");
uuid();

const comments = [
  { id: uuid(), username: "Alice", comment: "This is a great post!" },
  { id: uuid(), username: "Bob", comment: "I totally agree with Alice." },
  {
    id: uuid(),
    username: "Charlie",
    comment: "Can someone explain this to me?",
  },
  { id: uuid(), username: "David", comment: "Charlie, I've sent you a DM." },
  {
    id: uuid(),
    username: "Eva",
    comment: "I have a different perspective on this.",
  },
  { id: uuid(), username: "Frank", comment: "Eva, I'd love to hear more." },
  {
    id: uuid(),
    username: "Grace",
    comment: "This reminds me of something I read last week.",
  },
  { id: uuid(), username: "Hannah", comment: "What's the source, Grace?" },
  {
    id: uuid(),
    username: "Ian",
    comment: "Does this apply to older versions?",
  },
  {
    id: uuid(),
    username: "Jane",
    comment: "Ian, I think it's only for the latest release.",
  },
  {
    id: uuid(),
    username: "Kyle",
    comment: "Has anyone tried this in production?",
  },
  { id: uuid(), username: "Liam", comment: "Yes, it's working fine for me." },
  { id: uuid(), username: "Monica", comment: "Thanks for sharing!" },
  { id: uuid(), username: "Nina", comment: "Looking forward to more updates." },
  { id: uuid(), username: "Oliver", comment: "Great discussion everyone." },
];

module.exports = comments;