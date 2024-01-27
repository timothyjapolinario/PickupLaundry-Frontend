export type CustomResponse<T = any> = {
  data: T;
  isSuccess: boolean;
  message: string;
};
