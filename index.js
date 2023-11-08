const { MongoClient } = require("mongodb");

// const url = 'mongodb+srv://ankit:ankit@nodemongotest1.36ib72a.mongodb.net/node_mongoose?retryWrites=true&w=majority';
const uri = "mongodb+srv://ankit:ankit@nodemongotest1.36ib72a.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function dbConnect() {
    let result = await client.connect();
    // await result.db("admin").command({ ping: 1 });
    let db = result.db('node_mongoose');
    // console.log(db);
    return db.collection('products');
    let response = await collection.find({ name: "hair oil" }).toArray();
    console.log(response);
}

dbConnect().then((res) => {
    res.find({}).toArray().then((res) => {
        console.log(res);
    });
})

async function insertdata() {
  dbConnect().then(async (res) => {
       await res.insertOne(
            {
                name: "from_node",
                quantity: 5,
                price: 30000,
                image: "https://unsplash.com/photos/a-computer-screen-with-a-remote-control-on-it-s5kTY-Ve1c0"
            }
        )
    })
}

insertdata()
