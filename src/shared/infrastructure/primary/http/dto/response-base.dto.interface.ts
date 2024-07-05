export interface ResponseBaseDto<R> {
  message: string;
  data?: R;
}