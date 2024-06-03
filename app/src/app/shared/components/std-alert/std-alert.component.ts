import { Component, Input } from '@angular/core';

type TType = 'warning' | 'info' | 'success' | 'error' | '';

@Component({
  selector: 'std-alert',
  standalone: true,
  imports: [],
  templateUrl: './std-alert.component.html',
  styleUrl: './std-alert.component.scss'
})
export class StdAlertComponent {

  @Input() type: TType = '';

}
