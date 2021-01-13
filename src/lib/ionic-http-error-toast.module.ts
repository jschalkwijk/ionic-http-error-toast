import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorToastInterceptor } from './http-error-toast.interceptor';
import { IonicHttpToasterService } from './ion-http-toastr.service';
import { IConfig } from './config.interface';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
  ],
})

export class IonicHttpErrorToastModule {
  static forRoot(config: IConfig): ModuleWithProviders<IonicHttpErrorToastModule> {
    return {
      ngModule: IonicHttpErrorToastModule,
      providers: [{provide: 'config' , useValue: config},  {
        provide: HTTP_INTERCEPTORS, useClass: HttpErrorToastInterceptor, multi: true, deps: [IonicHttpToasterService]
      }
      ]
    };
  }
}
