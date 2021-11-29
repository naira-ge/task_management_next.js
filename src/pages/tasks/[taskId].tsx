import { AnyObject } from 'utils/types';

function Task (props : AnyObject) {


  return (
    <h3>
      Task {props?.taskId}
    </h3>
  )
}

export async function getServerSideProps ( context: AnyObject ){
  const taskId = context.params.taskId;

  return {
    props: {
      taskId,
    }
  }
}

export default Task;
