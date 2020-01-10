import {Component, EventEmitter, Input, OnInit, OnChanges, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material';


@Component({
  selector: 'msda-paginator',
  exportAs: 'MSDAPaginator',
  templateUrl: './paginator.html',
  styleUrls: ['./paginator.scss'],
  providers: [
    // For overwriting/changing default properties of paginator
    {provide: MatPaginatorIntl, useClass: MSDAPaginator}
  ]
})
export class MSDAPaginator extends MatPaginatorIntl implements OnInit, OnChanges {
  // @Input() itemsPerPage: number;
  // @Input() totalItems: number;
  // @Input() itemsPerPageConfig;

  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() page: EventEmitter<object> = new EventEmitter();
  // @Output() pageConfigChange: EventEmitter<any> = new EventEmitter();

  // currentPageIndex: number = 1;
  // numberOfTotalPages: number;

  // private _pageEventData: object = {
  //   pageIndex: this.currentPageIndex,
  //   pageSize: null
  // };


  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() {
    super();

    this._setPaginatorInGeorgian();
  }

  ngOnChanges() {
    // this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    // this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
  }

  ngOnInit() {
    this._placeElementBetweenPaginatorNavigationArrows();
  }


  // nextPage() {
  //   if (this.currentPageIndex < this.numberOfTotalPages) {
  //     this._pageEventData['pageIndex'] = ++this.currentPageIndex;
  //     this.page.emit(this._pageEventData);
  //   }
  // }
  //
  // previousPage() {
  //   if (this.currentPageIndex > 1) {
  //     this._pageEventData['pageIndex'] = --this.currentPageIndex;
  //     this.page.emit(this._pageEventData);
  //   }
  // }
  //
  // moveToTheRequestedPage() {
  //   if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
  //     this._pageEventData['pageIndex'] = this.currentPageIndex;
  //     this.page.emit(this._pageEventData);
  //   }
  // }
  //
  // onSelectionChange(e: Event) {
  //   this.itemsPerPage = parseInt(e.srcElement['value'], 10);
  //   this._pageEventData['pageSize'] = this.itemsPerPage;
  //
  //   this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  //
  //   this.page.emit(this._pageEventData);
  //   this.pageConfigChange.emit(this.itemsPerPage);
  // }

  private _setPaginatorInGeorgian() {
    // Overwriting default properties of paginator
    this.itemsPerPageLabel = 'ჩანაწერების რაოდენობა გვერდზე:';
    this.nextPageLabel = 'შემდეგი გვერდი';
    this.previousPageLabel = 'წინა გვერდი';
  }

  onPageSizeOrPageIndexChange(e) {
    this.page.emit(e);
  }

  private _placeElementBetweenPaginatorNavigationArrows() {
    const betweenPaginatorArrowsElement = document.getElementById('between-paginator-navigation-arrows');
    const paginatorNavigationNextArrowElement = document.getElementsByClassName('mat-paginator-navigation-next')[0];
    const paginatorArrowsParentElement = document.getElementsByClassName('mat-paginator-range-actions')[0];
    paginatorArrowsParentElement.insertBefore(betweenPaginatorArrowsElement, paginatorNavigationNextArrowElement);
  }
}
