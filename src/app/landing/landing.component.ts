import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  scrollToBottom():void{
    const element = document.getElementById('mainRecepie');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Element with ID 'mainRecepie' not found.");
    }
  }
}
