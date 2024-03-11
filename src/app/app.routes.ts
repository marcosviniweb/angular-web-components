import { Routes } from '@angular/router';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {'path': '', 'component': HomeComponent},
    {'path': 'checkbox', 'component': CheckboxComponent},
];
