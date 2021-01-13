import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IHttpToasterService } from './http-toaster-service.interface';

export class HttpErrorToastInterceptor implements HttpInterceptor {

  constructor(public toast: IHttpToasterService ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          this.toast.presentToast(error);
          return throwError(error);
        }),
      );
  }
 }
