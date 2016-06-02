import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | done:filterDone:4:5:'hi'"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewkeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onkegSelect: EventEmitter<Keg>;
  public selectedkeg: Keg;
  public filterDone: string = "notDone";
  constructor() {
    this.onkegSelect = new EventEmitter();
  }
  kegClicked(clickedkeg: keg): void {
    this.selectedkeg = clickedkeg;
    this.onkegSelect.emit(clickedkeg);
  }
  createKeg(description: string): void {
    this.kegList.push(
      new keg(description, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
