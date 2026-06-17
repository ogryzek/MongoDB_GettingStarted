# Getting Started with MongoDB

Go to [Cloud.MongoDB.com](http://cloud.mongodb.com/), register and/or sign in, create a project if you do not have one, otherwise select a project you'd like to use. Add a cluster, and let's try connecting using 3 different approaches:  
  
## Connecting through the Shell  
  
If you have not yet, make sure to install `mongosh` (the [MongoDB commandline interface](https://www.mongodb.com/docs/mongodb-shell/install/)).  
  
You should be able to get a connection string, and try to connect:

```
mongosh "mongodb+srv://mysupercluster1.dzw39tj.mongodb.net/" --apiVersion 1 --username 123and_db_user
```
If you forget your password, like I did, you can go to Database & Network Access under the Security menu, and set a new password for your database user.  
  
## Connecting through VS Code  
  
Open up VS Code Extensions (CMD-Shift-X), and search for "MongoDB for VS Code." Then open the command pallete (CMD-Shift-P), and search `MongoDB: Connect`. Then use your connection string to connect, and you can see an interface at the MongoDB icon on the left of VS Code.

## Using NodeJS  
  
Install MongoDB:
```
npm install mongodb
```

You can view the full code sample from the MongoDB Atlas dialog. It should look similar to this:
```js

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://123and_db_user:<db_password>@mysupercluster1.dzw39tj.mongodb.net/?appName=MySuperCluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

You will of course need to replace `<db_password>` with your password. If everything went well, you should see the following message when you run `node app.js`:
```
Pinged your deployment. You successfully connected to MongoDB!
```