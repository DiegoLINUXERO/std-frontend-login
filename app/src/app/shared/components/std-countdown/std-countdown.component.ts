import { Component, OnInit, Input } from '@angular/core';

type TPosition = 'end' | 'center';

@Component({
  selector: 'std-countdown',
  templateUrl: './std-countdown.component.html',
  styleUrls: ['./std-countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() position: TPosition = 'end';

  countdownMinutes: number = 5;
  countdownSeconds: number = 0;
  interval: any;
  showModal = false;
  sizeModal = 'm';

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
        if (this.countdownSeconds == 0 && this.countdownMinutes == 0) {
          clearInterval(this.interval);
          this.openModal();
        }
      } else {
        if (this.countdownMinutes > 0) {
          this.countdownMinutes--;
          this.countdownSeconds = 59;
        }
      }
    }, 1000);
  }

  closeModal() {
    this.showModal = false;
  }

  openModal(): void {
    this.showModal = true;
  }
}
