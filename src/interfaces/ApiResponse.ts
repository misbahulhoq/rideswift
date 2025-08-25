export interface IApiResponse {
  success: boolean;
  statusCode: boolean;
  message: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  data: any;
}
