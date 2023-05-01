export interface Todo {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  description: string;
  completedAt?: string;
}

export type TodoList = Todo[];
