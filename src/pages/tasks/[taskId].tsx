import { useRouter } from 'next/router';

function Task () {
  const { query } = useRouter();

  const taskId = query.taskId;

  return (
    <div>
      Task {taskId}
    </div>
  )
}

export default Task;
