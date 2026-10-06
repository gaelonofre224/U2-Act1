import { Header } from './components/Header'
import { TaskFilters } from './components/TaskFilters'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskSummary } from './components/TaskSummary'
import { useStudyPlan } from './hooks/useStudyPlan'

export default function App() {
  const {
    tasks,
    filter,
    error,
    summary,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
  } = useStudyPlan()

  return (
    <main className="app">
      <Header />
      <section className="layout">
        <TaskForm error={error} handleAddTask={addTask} />
        <section className="board">
          <TaskSummary
            total={summary.total}
            pending={summary.pending}
            completed={summary.completed}
          />
          <TaskFilters
            currentFilter={filter}
            handleFilter={setFilter}
          />
          <TaskList
            tasks={tasks}
            handleToggle={toggleTask}
            handleDelete={deleteTask}
          />
        </section>
      </section>
    </main>
  )
}