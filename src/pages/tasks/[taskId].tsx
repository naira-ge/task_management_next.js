import { AnyObject } from 'utils/types';

function Task ({taskData}: AnyObject) {

  const taskId = taskData.taskId;

  return (
    <h3>
      Task {taskId}
    </h3>
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
