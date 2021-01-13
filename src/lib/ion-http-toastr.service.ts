import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core/dist/types/components/toast/toast-interface';
import { IConfig } from './config.interface';
import {
  KhttpErrorIgnore,
  KhttpErrorMessages,
} from './http-error-messages.const';
import { IHttpError } from './http-errors.interface';
import { IHttpToasterService } from './http-toaster-service.interface';

@Injectable({
  providedIn: 'root',
})
export class IonicHttpToasterService implements IHttpToasterService {
  public error: HttpErrorResponse;
  private defaultErrors: IHttpError = {
    httpErrorMessages: KhttpErrorMessages,
    httpErrorIgnore: KhttpErrorIgnore,
  };

  httpErrors: IHttpError;
  useResponseError: boolean;

  public options: ToastOptions = {
    message: '',
  };

  constructor(
    public toastController: ToastController,
    @Inject('config') public config: IConfig
  ) {
    // Check if config is set
    if(this.config){
      this.httpErrors = (this.config.httpErrors) ? this.config.httpErrors : {};
      this.useResponseError = (this.config.useResponseError) ? this.config.useResponseError : false;

      if(this.config.options){
        this.options = {...this.options, ...this.config.options}
      }
    }

    this.checkHttpErrors();
  }

  async presentToast(error: HttpErrorResponse) {
    this.error = error;
    if (!this.httpErrors.httpErrorIgnore.includes(error.status)) {
      this.options.message = this.message(error.status);
      const toast = await this.toastController.create(this.options);
      toast.present();
    }
  }

  message(status: number): string {
    //Use response error message if present and set in config
    if(
      this.error.error.message
      && this.error.error.message !== ''
      && this.useResponseError
    ){
      return this.error.error.message;
    }
    // Use error message if exists and not ignored
    return this.httpErrors.httpErrorMessages[status] &&
      !this.httpErrors.httpErrorIgnore.includes(status)
      ? this.httpErrors.httpErrorMessages[status]
      : 'Oops, something went wrong.';
  }

  // Set default error messages and default ignore codes if not set.
  checkHttpErrors() {
    if (!this.httpErrors.httpErrorMessages && this.httpErrors.httpErrorIgnore) {
      this.httpErrors.httpErrorMessages = this.defaultErrors.httpErrorMessages;
      this.httpErrors.httpErrorIgnore = this.httpErrors.httpErrorIgnore;
    } else if (
      this.httpErrors.httpErrorMessages &&
      !this.httpErrors.httpErrorIgnore
    ) {
      this.httpErrors.httpErrorMessages = this.httpErrors.httpErrorMessages;
      this.httpErrors.httpErrorIgnore = this.defaultErrors.httpErrorIgnore;
    } else {
      this.httpErrors = this.defaultErrors;
    }
  }
}
