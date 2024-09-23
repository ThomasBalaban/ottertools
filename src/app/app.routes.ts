import { Routes } from '@angular/router';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
