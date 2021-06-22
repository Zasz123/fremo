export interface IMemo {
  id?: number;
  writer?: {
    id: number;
    email: string;
    nickName: string;
  };
  title: string;
  body: string;
  createdAt?: Date;
}
