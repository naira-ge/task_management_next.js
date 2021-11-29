// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  message: string
}

async function handlerTask(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)
{
  try
  {
    if(req.method === 'GET') {
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://naira:987654321@cluster0.clov1.mongodb.net/tasks?retryWrites=true&w=majority');
      console.log( 'MongoDB connected' );
      const taskId = req.query.taskId;
      
    const db = client.db();

    const tasksCollection = db.collection( 'tasks' );
    const selectedTask = await tasksCollection.findOne({_id: taskId});
    client.close();

    res.status( 200 ).json( {selectedTask} )
    }
  } catch (error) {
    console.log(error);
  }
}

export default handlerTask;
