/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, EventEmitter, ElementRef } from '@angular/core';
export class MSDACardButtonsContainer {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.row = 3;
        this.column = 3;
        this.dragEnabled = false;
        this.dataSource = [];
        this.sortupdate = new EventEmitter();
        this.buttonClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get gridTemplateColumns() {
        return '1fr '.repeat(this.column).trim();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.dragEnabled) {
            jQuery('.msda-card-buttons-container-inner', this._el.nativeElement).sortable({
                handle: '.msda-card-button-move-handler'
            }).bind('sortupdate', (event, ui) => {
                this.sortupdate.emit({ event, ui });
            });
        }
    }
}
MSDACardButtonsContainer.decorators = [
    { type: Component, args: [{
                selector: 'msda-card-buttons-container',
                exportAs: 'MSDACardButtonsContainer',
                template: "<div class=\"msda-card-buttons-container-inner\" [style.grid-template-columns]=\"gridTemplateColumns\">\r\n  <ng-template ngFor let-item [ngForOf]=\"dataSource\">\r\n    <msda-card-button [title]=\"item.title\" [text]=\"item.text\" [icon]=\"item.icon\" [iconType]=\"item.iconType\" [iconBackgroundColor]=\"item.iconBackgroundColor\" (buttonClick)=\"buttonClick.emit($event)\"></msda-card-button>\r\n  </ng-template>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'button',
                    'class': 'msda-card-buttons-container'
                },
                styles: [".msda-card-buttons-container{overflow:hidden}.msda-card-buttons-container-inner{display:-ms-grid;display:grid;margin-top:10px;margin-bottom:10px;gap:10px 24px}"]
            }] }
];
/** @nocollapse */
MSDACardButtonsContainer.ctorParameters = () => [
    { type: ElementRef }
];
MSDACardButtonsContainer.propDecorators = {
    row: [{ type: Input }],
    column: [{ type: Input }],
    dragEnabled: [{ type: Input }],
    dataSource: [{ type: Input }],
    sortupdate: [{ type: Output }],
    buttonClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MSDACardButtonsContainer.prototype.row;
    /** @type {?} */
    MSDACardButtonsContainer.prototype.column;
    /** @type {?} */
    MSDACardButtonsContainer.prototype.dragEnabled;
    /** @type {?} */
    MSDACardButtonsContainer.prototype.dataSource;
    /** @type {?} */
    MSDACardButtonsContainer.prototype.sortupdate;
    /** @type {?} */
    MSDACardButtonsContainer.prototype.buttonClick;
    /** @type {?} */
    MSDACardButtonsContainer.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1idXR0b25zLWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbXNkYS8iLCJzb3VyY2VzIjpbImxpYi9jYXJkLWJ1dHRvbi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBZ0J2QixNQUFNLE9BQU8sd0JBQXdCOzs7O0lBWWpDLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBVjFCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBRXBCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXZCLENBQUM7Ozs7SUFFeEMsSUFBSSxtQkFBbUI7UUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixNQUFNLENBQUMsb0NBQW9DLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzFFLE1BQU0sRUFBRSxnQ0FBZ0M7YUFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7OztZQXRDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMseWJBQTRDO2dCQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsT0FBTyxFQUFFLDZCQUE2QjtpQkFDekM7O2FBQ0o7Ozs7WUFqQkcsVUFBVTs7O2tCQW9CVCxLQUFLO3FCQUNMLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLE1BQU07MEJBQ04sTUFBTTs7OztJQVJQLHVDQUF5Qjs7SUFDekIsMENBQTRCOztJQUU1QiwrQ0FBc0M7O0lBRXRDLDhDQUE4Qjs7SUFFOUIsOENBQTZEOztJQUM3RCwrQ0FBOEQ7O0lBRWxELHVDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtYnV0dG9ucy1jb250YWluZXIuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJkLWJ1dHRvbnMtY29udGFpbmVyLnNjc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAncm9sZSc6ICdidXR0b24nLFxyXG4gICAgICAgICdjbGFzcyc6ICdtc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXInXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNU0RBQ2FyZEJ1dHRvbnNDb250YWluZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSByb3c6IG51bWJlciA9IDM7XHJcbiAgICBASW5wdXQoKSBjb2x1bW46IG51bWJlciA9IDM7XHJcblxyXG4gICAgQElucHV0KCkgZHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnkgPSBbXTtcclxuXHJcbiAgICBAT3V0cHV0KCkgc29ydHVwZGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBnZXQgZ3JpZFRlbXBsYXRlQ29sdW1ucygpIHtcclxuICAgICAgICByZXR1cm4gJzFmciAnLnJlcGVhdCh0aGlzLmNvbHVtbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5tc2RhLWNhcmQtYnV0dG9ucy1jb250YWluZXItaW5uZXInLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6ICcubXNkYS1jYXJkLWJ1dHRvbi1tb3ZlLWhhbmRsZXInXHJcbiAgICAgICAgICAgIH0pLmJpbmQoJ3NvcnR1cGRhdGUnLCAoZXZlbnQsIHVpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnR1cGRhdGUuZW1pdCh7IGV2ZW50LCB1aSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=