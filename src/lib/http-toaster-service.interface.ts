import { HttpErrorResponse } from '@angular/common/http';
import { IHttpError } from './http-errors.interface';

export interface IHttpToasterService {
    error: HttpErrorResponse;
    options: object;
    httpErrors: IHttpError;
    useResponseError: boolean;
    presentToast(error: HttpErrorResponse): Promise<void>;
}
