import { ViewPollComponent } from './../../pages/poll/view-poll/view-poll.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreLoginLayoutRoutes } from './prelogin-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ThankyouComponent } from 'src/app/pages/thankyou/thankyou.component';
import { ResultsPollComponent } from 'src/app/pages/poll/results-poll/results-poll.component';
import { SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, AmazonLoginProvider } from 'angularx-social-login';
import { PrivacyComponent } from 'src/app/pages/privacy/privacy.component';
import { TermsComponent } from 'src/app/pages/terms/terms.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PreLoginLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ViewPollComponent,
    ResultsPollComponent,
    ThankyouComponent,
    PrivacyComponent,
    TermsComponent
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('113112417924-tsdtkvb6d4dlahcovq22b5dtg5qtous8.apps.googleusercontent.com'),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('307999227119011'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'clientId'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
})
export class PreLoginLayoutModule { }
