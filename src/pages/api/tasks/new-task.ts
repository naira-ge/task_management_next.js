// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';


async function handlerNewTask(
  req: NextApiRequest,
  res: NextApiResponse
)
{
  try
  {
    if(req.method === 'POST') {
    const task = req.body;
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://naira:987654321@cluster0.clov1.mongodb.net/tasks?retryWrites=true&w=majority');
    console.log( 'MongoDB connected' );
      
    const db = client.db();

    const tasksCollection = db.collection( 'tasks' );
    const addTask = await tasksCollection.insertOne( task );
    const data = await tasksCollection.find().toArray();
    client.close();

    res.status( 200 ).json( {data} )
    }
  } catch (error) {
    console.log(error);
  }
}

export default handlerNewTask;
