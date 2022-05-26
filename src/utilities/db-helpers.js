import { MongoClient } from "mongodb";

async function updateDataBase(req, res) {


  const connectionString = `mongodb+srv://ConnorTwo:ConnorPass@authcluster.jdoeb.mongodb.net/?retryWrites=true&w=majority`;
  let client;
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  const db = client.db();
  let result;
  try {
    result = await db.collection("employees").insertOne("staff");
  } catch (error) {
    client.close();
    res.status(500).json({ message: error.message });
    return;
  }

  client.close();
  res
    .status(201)
    .json({ message: "sweeet sweet backend success", message: result });
};
