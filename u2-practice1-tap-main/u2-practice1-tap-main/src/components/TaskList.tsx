import type { StudyTask } from '../types/StudyTask';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: StudyTask[];
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function TaskList({ tasks, handleToggle, handleDelete }: TaskListProps) {
  return (
    <section className="task-panel" aria-label="Tareas">
      {tasks.length === 0 ? (
        <p className="empty-state">No hay tareas para este filtro.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              subject={task.subject}
              done={task.done}
              handleToggle={() => handleToggle(task.id)}
              handleDelete={() => handleDelete(task.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}