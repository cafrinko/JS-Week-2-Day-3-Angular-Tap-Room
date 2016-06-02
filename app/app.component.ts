import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class ="container">
      <h1>Tap Room Kegs</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
    `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Fresh Squeezed IPA", "Deschutes", 4, 6 , 0),
      new Keg("Bright Cider", "Two Towns", 6, 6, 1),
      new Keg("Sinister Ale", "10 Barrel", 5, 5,  2),
      new Keg("Blueberry Mint", "Humm", 4, 5, 3),

    ];
  }

  KegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
