import { AnyObject } from 'utils/types';

function Task ({taskData}: AnyObject) {

  const taskId = taskData.taskId;

  return (
    <div>
      Task {taskId}
    </div>
  )
}

export async function getServerSideProps ( context: AnyObject ){
  const taskId = context.params.taskId;

  return {
    props: {
      taskData: {taskId},
    }
  }
}

export default Task;
