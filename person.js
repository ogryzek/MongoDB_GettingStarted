const { MongoClient, ServerApiVersion } = require("mongodb");
const connectionString = "mongodb+srv://123and_db_user:<db_password>@mysupercluster1.dzw39tj.mongodb.net/?appName=MySuperCluster1";

const client = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
  try {
    await client.connect();
 
    const db = client.db("test");

    const collection = db.collection("people");
    const personDocument = {
        "name": {"first": "Drew", "last": "Ogryzek"},
        "contribs": ["lol", "hey", "yo"],
        "views": "1"
    };

    const person = await collection.insertOne(personDocument);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
