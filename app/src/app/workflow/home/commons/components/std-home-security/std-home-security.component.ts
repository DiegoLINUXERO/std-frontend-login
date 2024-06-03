import { Component } from '@angular/core';

@Component({
  selector: 'std-home-security',
  templateUrl: './std-home-security.component.html',
  styleUrl: './std-home-security.component.scss'
})
export class StdHomeSecurityComponent {
	showModal = true;

  closeSession() {
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
  }
}
