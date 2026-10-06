import { useReducer } from 'react';
import type { StudyTask, StudyPlanState, SubjectId, FilterType } from '../types/StudyTask';
import type { StudyAction } from '../types/StudyAction.ts';

const initialState: StudyPlanState = {
  tasks: [],
  filter: 'all',
  error: '',
};

function reducerStudyPlan(state: StudyPlanState, action: StudyAction): StudyPlanState {
  switch (action.type) {
    case 'ADD': {
      const cleanTitle = action.title.trim();

      if (cleanTitle.length < 3) {
        return {
          ...state,
          error: 'Escribe un título de al menos 3 caracteres.',
        };
      }

      const newTask: StudyTask = {
        id: crypto.randomUUID(),
        title: cleanTitle,
        subject: action.subject,
        done: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        error: '',
      };
    }

    case 'TOGGLE': {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, done: !task.done } : task
        ),
      };
    }

    case 'DELETE': {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }

    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.filter,
      };
    }

    default:
      return state;
  }
}

export const useStudyPlan = () => {
  const [state, dispatch] = useReducer(reducerStudyPlan, initialState);

  function addTask(title: string, subject: SubjectId) {
    dispatch({ type: 'ADD', title, subject });
  }

  function toggleTask(id: string) {
    dispatch({ type: 'TOGGLE', id });
  }

  function deleteTask(id: string) {
    dispatch({ type: 'DELETE', id });
  }

  function setFilter(filter: FilterType) {
    dispatch({ type: 'SET_FILTER', filter });
  }

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'pending') return !task.done;
    if (state.filter === 'done') return task.done;
    return true;
  });

  const summary = {
    total: state.tasks.length,
    pending: state.tasks.filter((t) => !t.done).length,
    completed: state.tasks.filter((t) => t.done).length,
  };

  return {
    tasks: filteredTasks,
    filter: state.filter,
    error: state.error,
    summary,
    addTask,
    toggleTask,
    deleteTask,
    setFilter,
  };
};