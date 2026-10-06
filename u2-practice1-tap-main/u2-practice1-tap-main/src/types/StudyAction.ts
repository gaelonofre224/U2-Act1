import type { SubjectId, FilterType } from './StudyTask';

export type StudyAction =
  | { type: 'ADD'; title: string; subject: SubjectId }
  | { type: 'TOGGLE'; id: string }
  | { type: 'DELETE'; id: string }
  | { type: 'SET_FILTER'; filter: FilterType };