export interface ToastItem {
  id: number;
  title: string;
}

export type Toast = Omit<ToastItem, 'id'>;
