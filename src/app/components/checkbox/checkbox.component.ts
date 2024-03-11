import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Item } from '@experian-design-system/seds-checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent implements OnInit {

  
  async ngOnInit() {
    if (!customElements.get('seds-checkbox')) {
      await import('@experian-design-system/seds-checkbox');
    }
  }

  checkboxItems: Item[] = [
    { name: 'Checkbox 1', checked: false, position: 'before' },
    { name: 'Checkbox 2', checked: true, position: 'after' },
  ];

  onIndeterminateChange(event: Event) {
    const customEvent = event as CustomEvent;
    console.log('Indeterminate change:', customEvent.detail);
  }

  onModelChange(event: Event) {
    const customEvent = event as CustomEvent;
    console.log('Model change:', customEvent.detail);
  }

}
