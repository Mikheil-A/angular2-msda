/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var MSDAPaginator = /** @class */ (function () {
    function MSDAPaginator() {
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
    MSDAPaginator.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex < this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = ++this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex > 1) {
            this._pageEventData['pageIndex'] = --this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @return {?}
     */
    MSDAPaginator.prototype.moveToTheRequestedPage = /**
     * @return {?}
     */
    function () {
        if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MSDAPaginator.prototype.onSelectionChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.itemsPerPage = parseInt(e.srcElement['value'], 10);
        this._pageEventData['pageSize'] = this.itemsPerPage;
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.page.emit(this._pageEventData);
        this.pageConfigChange.emit(this.itemsPerPage);
    };
    MSDAPaginator.decorators = [
        { type: Component, args: [{
                    selector: 'msda-paginator',
                    exportAs: 'MSDAPaginator',
                    template: "<div id=\"container\" class=\"msda-body-2\">\r\n    <span>\u10E1\u10E3\u10DA \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8: {{totalItems}}</span>\r\n\r\n    <div id=\"right-end\">\r\n        <div id=\"select-number-of-records\">\r\n            <span>\u10D2\u10D5\u10D4\u10E0\u10D3\u10D6\u10D4 \u10E9\u10D0\u10DC\u10D0\u10EC\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E0\u10D0\u10DD\u10D3\u10D4\u10DC\u10DD\u10D1\u10D0: </span>\r\n\r\n            <select (change)=\"onSelectionChange($event)\" class=\"msda-body-2\">\r\n                <option *ngFor=\"let item of itemsPerPageConfig\" [value]=\"item\">\r\n                    {{item}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div id=\"paging-navigation\">\r\n            <msda-icon name=\"chevron_left\"\r\n                       [color]=\"currentPageIndex <= 1? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === 1? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"previousPage()\">\r\n            </msda-icon>\r\n\r\n            <div id=\"current-page-index-indicator\">\r\n                <input class=\"msda-body-2\" *ngIf=\"numberOfTotalPages > 2; else withoutInputField\"\r\n                       type=\"number\"\r\n                       [(ngModel)]=\"currentPageIndex\"\r\n                       (input)=\"moveToTheRequestedPage()\">\r\n                <ng-template #withoutInputField>\r\n                    <span>{{currentPageIndex}}</span>\r\n                </ng-template>\r\n            </div>\r\n            \r\n            <div id=\"total-number-of-pages\" class=\"msda-body-2\"> - {{numberOfTotalPages}}</div>\r\n\r\n            <msda-icon name=\"chevron_right\"\r\n                       [color]=\"currentPageIndex >= numberOfTotalPages? '#CCCEE0' : '#000000'\"\r\n                       [ngStyle]=\"{'cursor': currentPageIndex === numberOfTotalPages? 'not-allowed' : 'pointer'}\"\r\n                       (click)=\"nextPage()\">\r\n            </msda-icon>\r\n        </div>\r\n    </div>\r\n</div>\r\n",
                    styles: [".msda-elevation-z2{box-shadow:0 2px 2px rgba(0,0,0,.2)}.msda-elevation-z4{box-shadow:0 4px 4px rgba(0,0,0,.1)}.msda-elevation-z4-underline{box-shadow:0 1px #e0e0e0,0 4px 4px rgba(0,0,0,.1)}.msda-border-top{box-shadow:0 -1px #e0e0e0}.msda-border-bottom{box-shadow:0 1px #e0e0e0}.msda-sidebar-element-hover{box-shadow:0 1px 1px rgba(0,0,0,.1)}.msda-body-1,.msda-body-1-bold,.msda-body-2,.msda-body-2-bold{color:#333;font-family:'BPG DejaVu Sans';letter-spacing:.1em}.msda-body-1 a,.msda-body-1-bold a,.msda-body-2 a,.msda-body-2-bold a{color:#3966a3}.msda-body-1 a:focus,.msda-body-1 a:hover,.msda-body-1-bold a:focus,.msda-body-1-bold a:hover,.msda-body-2 a:focus,.msda-body-2 a:hover,.msda-body-2-bold a:focus,.msda-body-2-bold a:hover{color:#777}.msda-body-1,.msda-body-1-bold{font-size:13px;line-height:21px}.msda-body-2,.msda-body-2-bold{font-size:11px;line-height:20px}.msda-body-1-bold,.msda-body-2-bold{font-weight:700}.msda-display-1,.msda-display-2,.msda-display-3{color:#333}.msda-display-1{font-size:15px;font-family:'BPG DejaVu Sans';font-weight:700;line-height:26px}.msda-display-1 a{color:#3966a3}.msda-display-1 a:focus,.msda-display-1 a:hover{color:#777}.msda-display-2,.msda-display-3{font-family:'BPG DejaVu Sans Caps Web';text-transform:uppercase}.msda-display-2{font-size:13px}.msda-display-3{font-size:11px;letter-spacing:.1em}#container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;box-shadow:0 1px 0 #e0e0e0;padding:8px 24px;color:#777}#container #right-end{display:flex;flex-direction:row;align-items:center}#container #right-end #select-number-of-records select{border:none;color:#777}#container #right-end #paging-navigation{display:flex;flex-direction:row;align-items:center;margin-left:70px}#container #right-end #paging-navigation msda-icon{cursor:pointer}#container #right-end #paging-navigation #current-page-index-indicator{margin:0 0 0 30px;font-weight:700}#container #right-end #paging-navigation input[type=number]{background-color:#f7f7fa;border-radius:2px;border:none;padding:10px 12px;box-sizing:border-box;width:64px;font-weight:700}#container #right-end #paging-navigation input[type=number]::-webkit-inner-spin-button,#container #right-end #paging-navigation input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}#container #right-end #paging-navigation #total-number-of-pages{margin:0 30px 0 4px;color:#777}"]
                }] }
    ];
    /** @nocollapse */
    MSDAPaginator.ctorParameters = function () { return []; };
    MSDAPaginator.propDecorators = {
        itemsPerPage: [{ type: Input }],
        totalItems: [{ type: Input }],
        itemsPerPageConfig: [{ type: Input }],
        page: [{ type: Output }],
        pageConfigChange: [{ type: Output }]
    };
    return MSDAPaginator;
}());
export { MSDAPaginator };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tc2RhLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRvci9wYWdpbmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHaEY7SUF1Qkk7UUFaVSxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MscUJBQWdCLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkUscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLG1CQUFjLEdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDaEMsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUlGLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBR0QsZ0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQzs7OztJQUVELG9DQUFZOzs7SUFBWjtRQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Ozs7SUFFRCw4Q0FBc0I7OztJQUF0QjtRQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ2hGLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Ozs7O0lBRUQseUNBQWlCOzs7O0lBQWpCLFVBQWtCLENBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQTdESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHNqRUFBK0I7O2lCQUVsQzs7Ozs7K0JBRUksS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7dUJBRUwsTUFBTTttQ0FDTixNQUFNOztJQWtEWCxvQkFBQztDQUFBLEFBOURELElBOERDO1NBeERZLGFBQWE7OztJQUN0QixxQ0FBOEI7O0lBQzlCLG1DQUE0Qjs7SUFDNUIsMkNBQXNDOztJQUV0Qyw2QkFBdUQ7O0lBQ3ZELHlDQUFtRTs7SUFFbkUseUNBQTZCOztJQUM3QiwyQ0FBMkI7O0lBRTNCLHVDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXNkYS1wYWdpbmF0b3InLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBUGFnaW5hdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0b3IuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0b3Iuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBUGFnaW5hdG9yIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaXRlbXNQZXJQYWdlQ29uZmlnOiBudW1iZXJbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcGFnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcGFnZUNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudFBhZ2VJbmRleDogbnVtYmVyID0gMTtcclxuICAgIG51bWJlck9mVG90YWxQYWdlczogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3BhZ2VFdmVudERhdGE6IG9iamVjdCA9IHtcclxuICAgICAgICBwYWdlSW5kZXg6IHRoaXMuY3VycmVudFBhZ2VJbmRleCxcclxuICAgICAgICBwYWdlU2l6ZTogbnVsbFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VTaXplJ10gPSB0aGlzLml0ZW1zUGVyUGFnZUNvbmZpZ1swXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA8IHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VFdmVudERhdGFbJ3BhZ2VJbmRleCddID0gKyt0aGlzLmN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5lbWl0KHRoaXMuX3BhZ2VFdmVudERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1BhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZUV2ZW50RGF0YVsncGFnZUluZGV4J10gPSAtLXRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVUb1RoZVJlcXVlc3RlZFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VJbmRleCA+PSAxICYmIHRoaXMuY3VycmVudFBhZ2VJbmRleCA8PSB0aGlzLm51bWJlck9mVG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlSW5kZXgnXSA9IHRoaXMuY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBwYXJzZUludChlLnNyY0VsZW1lbnRbJ3ZhbHVlJ10sIDEwKTtcclxuICAgICAgICB0aGlzLl9wYWdlRXZlbnREYXRhWydwYWdlU2l6ZSddID0gdGhpcy5pdGVtc1BlclBhZ2U7XHJcblxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZUb3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmVtaXQodGhpcy5fcGFnZUV2ZW50RGF0YSk7XHJcbiAgICAgICAgdGhpcy5wYWdlQ29uZmlnQ2hhbmdlLmVtaXQodGhpcy5pdGVtc1BlclBhZ2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==