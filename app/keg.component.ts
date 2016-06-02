import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
    <input *ngIf="keg.empty" type="checkbox" checked
    (click)="toggleSize(false)"/>
    <input *ngIf="!keg.empty" type="checkbox"
    (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class SizeComponent {
  public keg: Keg;
  toggleSize(setState: number){
    this.task.size = setState;
  }
}
