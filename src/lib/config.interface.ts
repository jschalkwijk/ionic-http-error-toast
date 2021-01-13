import { ToastOptions } from '@ionic/core/dist/types/components/toast/toast-interface';
import { IHttpError } from './http-errors.interface';

export interface IConfig {
  httpErrors?: IHttpError,
  options?: ToastOptions,
  useResponseError?: boolean;
}
