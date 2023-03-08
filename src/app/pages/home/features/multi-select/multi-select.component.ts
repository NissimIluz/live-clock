import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TimeZone } from 'src/app/models/time-zone.modele';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnChanges {


  @Input() selectFrom!: TimeZone[];
  @Output() onSelected:EventEmitter<TimeZone[]> = new EventEmitter<TimeZone[]> ();

  selected!: TimeZone[];

  ngOnChanges(changes: SimpleChanges): void {
    this.selected = this.selectFrom;
  }

  select() {
    this.onSelected.emit(this.selected);
  }
}


