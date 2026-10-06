import type { FilterType } from '../types/StudyTask';

const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendientes' },
  { id: 'done', label: 'Completadas' },
] as const;

interface TaskFiltersProps {
  currentFilter: FilterType;
  handleFilter: (filter: FilterType) => void;
}

export function TaskFilters({ currentFilter, handleFilter }: TaskFiltersProps) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={currentFilter === filter.id ? 'filter is-active' : 'filter'}
          onClick={() => handleFilter(filter.id)}
          data-filter={filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}