import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'std-login-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-footer.component.html',
  styleUrl: './login-footer.component.scss',
})
export class LoginFooterComponent {
  @Input() centered = false;
}
