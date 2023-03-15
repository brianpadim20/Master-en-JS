import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('typing', [
      state('start', style({
        width: '0px',
        opacity: 0
      })),
      state('end', style({
        width: '*',
        opacity: 1
      })),
      transition('start => end', animate('2s 1s ease-out')),
      transition('end => start', animate('1s'))
    ])

  ]

})
export class AppComponent {
  title = 'typing-animation';
  texts = ['Desarrollador web', 'Desarrollador fullstack'];
  currentTextIndex = 0;
  currentText = '';
  currentState = 'start';

  ngOnInit() {
    this.startTypingAnimation();

  }

  startTypingAnimation() {
    setInterval(() => {
      this.currentText = this.texts[this.currentTextIndex];
      this.currentState = 'start';

      setTimeout(() => {
        this.currentState = 'end';

        setTimeout(() => {
          this.currentState = 'start';

          setTimeout(() => {
            this.currentTextIndex++;
            if (this.currentTextIndex >= this.texts.length) {
              this.currentTextIndex = 0;

            }
            this.startTypingAnimation();

          }, 5000);

        }, 5000);

      }, this.currentText.length * 100);

    }, 4000);

  }

}