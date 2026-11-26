// Shared types for the app. Keeping them in one place makes props easy to read.

export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export type Filter = "all" | "active" | "done";
