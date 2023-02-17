export type ITask = {
  id: number;
  title: string;
  description: string;
  time: number;
  category: string;
  priority: number;
  status: ITaskStatus;
};

type ITaskStatus = 'inprogress' | 'completed';
