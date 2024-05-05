import { MongoClient } from "mongodb";

export default async function post (req, res) {
  const client = new MongoClient("mongodb://localhost:27017/lcmass", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  if (req.method === "GET") {
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
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
