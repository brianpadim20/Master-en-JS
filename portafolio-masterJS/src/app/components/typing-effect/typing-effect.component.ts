import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css']
})
export class TypingEffectComponent {
  messages:string[] = [
    'Desarrollador web',
    'Desarrollador fullstack',
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'Angular'
  ];

  currentMessageIndex = 0;

  ngOnInit():void{
    setInterval(()=>{
      this.updateMessage();

    },5000);

  }updateMessage(){
    const messageElement=document.getElementById('typing-effect')!;/*El ! le dice a TS que messageElement no es null*/
    messageElement.innerText = this.messages[this.currentMessageIndex];
    this.currentMessageIndex = (this.currentMessageIndex+1)%this.messages.length;

  }

}
