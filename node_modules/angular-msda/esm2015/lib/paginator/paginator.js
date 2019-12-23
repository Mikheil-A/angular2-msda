/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class MSDAPaginator {
    constructor() {
        this.page = new EventEmitter();
        this.pageConfigChange = new EventEmitter();
        this.currentPageIndex = 1;
        this._pageEventData = {
            pageIndex: this.currentPageIndex,
            pageSize: null
        };
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
    }
    /**
     * @return {?}
     */
    nextPage() {
        if (this.currentPageIndex < this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = ++this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @return {?}
     */
    previousPage() {
        if (this.currentPageIndex > 1) {
            this._pageEventData['pageIndex'] = --this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @return {?}
     */
    moveToTheRequestedPage() {
        if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSelectionChange(e) {
        this.itemsPerPage = parseInt(e.srcElement['value'], 10);
        this._pageEventData['pageSize'] = this.itemsPerPage;
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.page.emit(this._pageEventData);
        this.pageConfigChange.emit(this.itemsPerPage);
    }
}
MSDAPaginator.decorators = [
    { type: Component, args: [{
                selector: 'msda-paginator',
                exportAs: 'MSDAPaginator',
                template: "<div id=\"container\" class=\"msda-body-2\">\r\n    <span>\u10E1\u10E3\u10DA \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8: {{totalItems}}</span>\r\n\r\n    <div id=\"right-end\">\r\n        <div id=\"select-number-of-records\">\r\n            <span>\u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0: </span>\r\n\r\n            <select (change)=\"onSelectionChange($event)\" class=\"msda-body-2\">\r\n                <option *ngFor=\"let item of itemsPerPageConfig\" [value]=\"item\">\r\n                    {{item}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div id=\"paging-navigation\">\r\n            <msda-icon name=\"chevron_left\"\r\n                       [color]=\"currentPageIndex <= 1? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === 1? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"previousPage()\">\r\n            </msda-icon>\r\n\r\n            <div id=\"current-page-index-indicator\">\r\n                <input class=\"msda-body-2\" *ngIf=\"numberOfTotalPages > 2; else withoutInputField\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"currentPageIndex\"\r\n                       (input)=\"moveToTheRequestedPage()\">\r\n                <ng-template #withoutInputField>\r\n                    <span>{{currentPageIndex}}</span>\r\n                </ng-template>\r\n            </div>\r\n            \r\n            <div id=\"total-number-of-pages\" class=\"msda-body-2\"> - {{numberOfTotalPages}}</div>\r\n\r\n            <msda-icon name=\"chevron_right\"\r\n                       [color]=\"currentPageIndex >= numberOfTotalPages? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === numberOfTotalPages? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"nextPage()\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}#container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 1px 0 #e0e0e0;padding:8px 24px;color:#777}#container #right-end{display:flex;flex-direction:row;align-items:center}#container #right-end #select-number-of-records select{border:none;color:#777}#container #right-end #paging-navigation{display:flex;flex-direction:row;align-items:center;margin-left:70px}#container #right-end #paging-navigation msda-icon{cursor:pointer}#container #right-end #paging-navigation #current-page-index-indicator{margin:0 0 0 30px;font-weight:700}#container #right-end #paging-navigation input[type=number]{background-color:#f7f7fa;border-radius:2px;border:none;padding:10px 12px;box-sizing:border-box;width:64px;font-weight:700}#container #right-end #paging-navigation input[type=number]::-webkit-inner-spin-button,#container #right-end #paging-navigation input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#container #right-end #paging-navigation #total-number-of-pages{margin:0 30px 0 4px;color:#777}"]
            }] }
];
/** @nocollapse */
MSDAPaginator.ctorParameters = () => [];
MSDAPaginator.propDecorators = {
    itemsPerPage: [{ type: Input }],
    totalItems: [{ type: Input }],
    itemsPerPageConfig: [{ type: Input }],
    page: [{ type: Output }],
    pageConfigChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MSDAPaginator.prototype.itemsPerPage;
    /** @type {?} */
    MSDAPaginator.prototype.totalItems;
    /** @type {?} */
    MSDAPaginator.prototype.itemsPerPageConfig;
    /** @type {?} */
    MSDAPaginator.prototype.page;
    /** @type {?} */
    MSDAPaginator.prototype.pageConfigChange;
    /** @type {?} */
    MSDAPaginator.prototype.currentPageIndex;
    /** @type {?} */
    MSDAPaginator.prototype.numberOfTotalPages;
    /** @type {?} */
    MSDAPaginator.prototype._pageEventData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tc2RhLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRvci9wYWdpbmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTaEYsTUFBTSxPQUFPLGFBQWE7SUFpQnRCO1FBWlUsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLHFCQUFnQixHQUFXLENBQUMsQ0FBQztRQUdyQixtQkFBYyxHQUFXO1lBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ2hDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFJRixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQzs7OztJQUVELFlBQVk7UUFDUixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkM7SUFDTCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2hGLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsQ0FBUTtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVwRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBN0RKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsZUFBZTtnQkFDekIsc2pFQUErQjs7YUFFbEM7Ozs7OzJCQUVJLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLO21CQUVMLE1BQU07K0JBQ04sTUFBTTs7OztJQUxQLHFDQUE4Qjs7SUFDOUIsbUNBQTRCOztJQUM1QiwyQ0FBc0M7O0lBRXRDLDZCQUF1RDs7SUFDdkQseUNBQW1FOztJQUVuRSx5Q0FBNkI7O0lBQzdCLDJDQUEyQjs7SUFFM0IsdUNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLXBhZ2luYXRvcicsXHJcbiAgICBleHBvcnRBczogJ01TREFQYWdpbmF0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRvci5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhZ2luYXRvci5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1TREFQYWdpbmF0b3IgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBpdGVtc1BlclBhZ2VDb25maWc6IG51bWJlcltdO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBwYWdlQ29uZmlnQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjdXJyZW50UGFnZUluZGV4OiBudW1iZXIgPSAxO1xyXG4gICAgbnVtYmVyT2ZUb3RhbFBhZ2VzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFnZUV2ZW50RGF0YTogb2JqZWN0ID0ge1xyXG4gICAgICAgIHBhZ2VJbmRleDogdGhpcy5jdXJyZW50UGFnZUluZGV4LFxyXG4gICAgICAgIHBhZ2VTaXplOiBudWxsXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICB0aGlzLm51bWJlck9mVG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcbiAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZVNpemUnXSA9IHRoaXMuaXRlbXNQZXJQYWdlQ29uZmlnWzBdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZUluZGV4IDwgdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZUluZGV4J10gPSArK3RoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzUGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZUluZGV4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlSW5kZXgnXSA9IC0tdGhpcy5jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLl9wYWdlRXZlbnREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZVRvVGhlUmVxdWVzdGVkUGFnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZUluZGV4ID49IDEgJiYgdGhpcy5jdXJyZW50UGFnZUluZGV4IDw9IHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VJbmRleCddID0gdGhpcy5jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLl9wYWdlRXZlbnREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZTogRXZlbnQpIHtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHBhcnNlSW50KGUuc3JjRWxlbWVudFsndmFsdWUnXSwgMTApO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VTaXplJ10gPSB0aGlzLml0ZW1zUGVyUGFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2UuZW1pdCh0aGlzLl9wYWdlRXZlbnREYXRhKTtcclxuICAgICAgICB0aGlzLnBhZ2VDb25maWdDaGFuZ2UuZW1pdCh0aGlzLml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9XHJcbn1cclxuIl19