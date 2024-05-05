import { MongoClient } from "mongodb";

const { insertPost, getAllPosts } = require("./mongoFunctions");

export async function getPosts(req, res) {
  const client = new MongoClient("mongodb://localhost:27017/lcmass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    console.log("mongoos data fetched");
    await client.connect();
    const db = client.db();
    const posts = await db.collection("posts").find().toArray();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}

export async function POST(req, res) {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res
      .status(400)
      .json({ error: "Title, content, and author are required" });
  }

  const post = {
    title,
    content,
    author,
    createdAt: new Date(),
  };

  try {
    await insertPost(post);
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function GET(req, res) {
  if (req.method === "GET") {
    await getPosts(req, res);
    console.log("data fetched");
  } else if (req.method === "POST") {
    await createPost(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
