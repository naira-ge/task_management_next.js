// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Data = {
  message: string
}

async function handlerNewTask(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)
{
  try
  {
    const user = sessionStorage.getItem( "TaskManagement" );

    if ( user ){
      res.status( 200 ).json( { user } );
    }

  } catch (error) {
    console.log(error);
  }
}

export default handlerNewTask;
