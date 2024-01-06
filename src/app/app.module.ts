import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FeatureModule } from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './Module/admin/admin.module';

import { AuthModule } from './Module/auth/auth.module';
// import { authReducer } from './State/Auth/auth.reducer';
// import { userReducer } from './State/User/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeatureModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    // StoreModule.forRoot({ auth: authReducer, user: userReducer }),
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
