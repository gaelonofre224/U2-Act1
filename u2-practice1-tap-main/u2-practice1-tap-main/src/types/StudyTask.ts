export type SubjectId = 'programacion' | 'matematicas' | 'historia'| 'prueba';
export type FilterType = 'all' | 'pending' | 'done';
export interface StudyTask {
  id: string;
  title: string;
  subject: SubjectId;
  done: boolean;
}

export interface StudyPlanState {
  tasks: StudyTask[];
  filter: FilterType;
  error: string;
}