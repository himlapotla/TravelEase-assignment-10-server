require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

// app.use(cors())
// app.use(express.json())

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = process.env.MONGO_URI;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// })

// async function run() {
//     try {
//         // await client.connect();

//         const db = client.db('travel-ease')
//         const vehiclesCollection = db.collection('vehicles')
//         const bookCollection = db.collection('bookVehicles')

//         // book from here........................................
//         app.post('/post-book', async (req, res) => {
//             const newBook = req.body
//             const result = await bookCollection.insertOne(newBook)
//             res.send(result)
//         })

//         app.get('/show-all-my-book', async (req, res) => {
//             const email = req.query.email
//             if (email) {
//                 query = { userEmail: email }
//             }

//             const cursor = bookCollection.find(query)
//             const result = await cursor.toArray()
//             res.send(result)
//         })
        


//         // vehicles from here............................................
//         app.get('/show-all-vehicles', async (req, res) => {
//             const cursor = vehiclesCollection.find()
//             const result = await cursor.toArray()
//             res.send(result)
//         })

//         app.get('/vehicles/:id', async (req, res) => {
//             const id = req.params.id
//             console.log(id);

//             const query = { _id: new ObjectId(id) }
//             const cursor = vehiclesCollection.find(query)
//             const result = await cursor.toArray()
//             res.send(result)
//         })

//         app.get('/show-all-my-vehicles', async (req, res) => {
//             const email = req.query.email
//             if (email) {
//                 query = { userEmail: email }
//             }

//             const cursor = vehiclesCollection.find(query)
//             const result = await cursor.toArray()
//             res.send(result)
//         })

//         app.get('/show-all-vehicles-six', async (req, res) => {
//             const cursor = vehiclesCollection.find().sort({ createdAt: -1 }).limit(6)
//             const result = await cursor.toArray()
//             res.send(result)
//         })

//         app.post('/post-vehicles', async (req, res) => {
//             const newVehicles = req.body
//             newVehicles.createdAt = new Date().toISOString()
//             const result = await vehiclesCollection.insertOne(newVehicles)
//             res.send(result)
//         })

//         app.patch('/vehicles-update/:id', async (req, res) => {
//             const id = req.params.id

//             const updateVeh = req.body
//             const query = { _id: new ObjectId(id) }
//             const update = {
//                 $set: updateVeh
//             }
//             const result = await vehiclesCollection.updateOne(query, update)
//             res.send(result)
//         })

//         app.delete('/delete/:id', async(req, res) => {
//             const id = req.params.id
//             const query = {_id: new ObjectId(id)}
//             const result = await vehiclesCollection.deleteOne(query)
//             res.send(result)
//         })

//         // await client.db("admin").command({ ping: 1 });
//         // console.log("Pinged your deployment. You successfully connected to MongoDB !!!");
//     }
//     finally {

//     }
// }
// run().catch(console.dir);

// app.get('/', (req, res) => {
//     res.send('Smart server is running...')
// })

// app.listen(port, () => {
//     console.log(`Smart server is running on port -- ${port}`)
// })