import { Component } from '@angular/core';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
