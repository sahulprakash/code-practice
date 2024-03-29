import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coding-practice';
  update = false
  constructor(private updates:SwUpdate){
this.updates.available.subscribe(event=>{
  this.update = true

  updates.activateUpdate().then(()=>document.location.reload())
})

  }
}
