import type { SubjectId } from '../types/StudyTask';

interface TaskFormProps {
  error: string;
  handleAddTask: (title: string, subject: SubjectId) => void;
}

export function TaskForm({ error, handleAddTask }: TaskFormProps) {
  return (
    <form
      className="task-form"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value as SubjectId;

        handleAddTask(title, subject);

        if (title.trim().length >= 3) {
          form.reset();
        }
      }}
    >
      <h2>Nueva tarea</h2>
      <p className="form-help">
        El título es obligatorio y debe tener al menos 3 caracteres.
      </p>

      <label htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Ej. Titulo de la tarea :)"
        autoComplete="off"
      />

      <label htmlFor="subject">Materia</label>
      <select id="subject" name="subject" defaultValue="programacion">
        <option value="programacion">Programación</option>
        <option value="matematicas">Matemáticas</option>
        <option value="historia">Historia</option>
        <option value="prueba">Prueba/Ignorar</option>
      </select>

      <p className="form-error" role="alert">
        {error}
      </p>

      <button type="submit" className="submit-button">
        Agregar tarea
      </button>
    </form>
  );
}