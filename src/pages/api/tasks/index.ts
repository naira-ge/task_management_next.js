// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';


async function handlerTasks(
  req: NextApiRequest,
  res: NextApiResponse
)
{
  try
  {
    if(req.method === 'GET') {
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://naira:987654321@cluster0.clov1.mongodb.net/tasks?retryWrites=true&w=majority');
      console.log( 'MongoDB connected' );
      
      const db = client.db();

    const tasksCollection = db.collection( 'tasks' );
    const result = await tasksCollection.find({}).toArray();
    client.close();

    res.status( 200 ).json( {result} )
    }
  } catch (error) {
    console.log(error);
  }
}

export default handlerTasks;
