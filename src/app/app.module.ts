import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SqlBackend} from '@astonio/mysql-backend';
import {Backend} from '@astonio/core';
import {AstonioUIModule, WindowsManager, BaseDataStorageService, LocalDataStorageService} from '@astonio/ui';
import {VentusWindowsManager} from '@astonio/ventus-wm';
import {AstonioModelUIModule} from '@astonio/model-ui'

export var backend = new SqlBackend({
  host: 'localhost',
  user: 'root',
  password: '89123031464root0kali0exploit',
  database: 'library'
});
backend.bootstrap().subscribe(() => {
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AstonioUIModule.forRoot(),
    AstonioModelUIModule.forRoot(),
  ],
  providers: [
  {provide: Backend, useValue: backend},
    LocalDataStorageService,
    VentusWindowsManager,
    {provide: WindowsManager, useExisting: VentusWindowsManager},
    {provide: BaseDataStorageService, useExisting: LocalDataStorageService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
