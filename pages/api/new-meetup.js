import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        `mongodb+srv://prabesh:7Ygjh5U5Je9uUcNN@cluster0.gornro4.mongodb.net/meetup?retryWrites=true&w=majority`
      );
      const db = client.db();
      const meetUpsCollection = db.collection("meetups101");
      const result = await meetUpsCollection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({
        message: "Meetup inserted",
      });
    } catch (error) {
      console.log(error);
    }
    
  }
}


export default handler;
