import type { SubjectId } from '../types/StudyTask';

const subjects = {
  programacion: 'Programación',
  matematicas: 'Matemáticas',
  historia: 'Historia',
  prueba: 'Prueba'
} as const;

interface TaskItemProps {
  title: string;
  subject: SubjectId;
  done: boolean;
  handleToggle: () => void;
  handleDelete: () => void;
}

export function TaskItem({
  title,
  subject,
  done,
  handleToggle,
  handleDelete,
}: TaskItemProps) {
  return (
    <li className={done ? 'task is-done' : 'task'}>
      <label className="task-check">
        <input
          type="checkbox"
          checked={done}
          onChange={handleToggle}
        />
        <span>{title}</span>
      </label>
      <span className={`badge badge-${subject}`}>{subjects[subject]}</span>
      <button
        type="button"
        className="delete-button"
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </li>
  );
}