import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'msda-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() displayedColumnsEng: string[];
  @Input() displayedColumnsGeo: string[];

  @Input() dataSource: any;

  @ViewChild(MatSort, {static: true}) matSort: MatSort;

  @Output() onSort: EventEmitter<{ active: string, direction: string }> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    this.dataSource.sort = this.matSort;
  }


  onSortChange(e: { active: string, direction: string }) {
    this.onSort.emit(e);
  }
}
