import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3003;

// Replace the following with your Atlas connection string
const uri = "URI_DATABASE"; //CHANGE URI_DATABASE

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        const database = client.db('Prova');
        //const collection = database.collection('Risultati');

        // Middleware per abilitare le richieste CORS
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Imposta l'origine consentita
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Imposta i metodi HTTP consentiti
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Imposta gli header consentiti
            next();
        });


        // API endpoint per ottenere tutti i documenti
        app.get('/api/documents', async (req, res) => {
            const collectionName = req.query.collection;
            const collection = database.collection(collectionName);
            //console.log(collection);
            const documents = await collection.find().toArray();
            res.json(documents);
            console.log(documents);

        });

        // API endpoint per inserire un nuovo documento
        app.post('/api/documents', async (req, res) => {
            const newDocument = req.body;
            await collection.insertOne(newDocument);
            res.status(201).send();
        });

        /*
        // Find the document

        const filter = { "num": 1 };

        const document = await collection.findOne(filter);

        // Print results

        console.log("Document found:\n" + JSON.stringify(document));
        */
    } catch (error) {
        console.error('Error:', error);
    }
}

run().catch(console.dir);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
