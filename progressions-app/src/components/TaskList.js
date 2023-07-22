import { useTasks } from '../hooks/useTasks';

export const TaskList = () => {
  const { data: tasks, isLoading, error } = useTasks();

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};
