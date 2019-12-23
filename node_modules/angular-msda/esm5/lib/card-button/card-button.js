/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var MSDACardButton = /** @class */ (function () {
    function MSDACardButton() {
        this.icon = 'icon-4';
        this.iconType = 'square';
        this.iconColor = '#FFFFFF';
        this.iconBackgroundColor = '#EA854D';
        this.draggable = true;
        this.buttonClick = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MSDACardButton.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.buttonClick.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MSDACardButton.prototype.moveHandlerClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
    };
    MSDACardButton.decorators = [
        { type: Component, args: [{
                    selector: 'msda-card-button',
                    exportAs: 'MSDACardButton',
                    template: "<div class=\"msda-card-button-header\">\r\n  <div class=\"msda-card-button-title\">{{ title }}</div>\r\n  <div class=\"msda-card-button-move-handler\" (click)=\"moveHandlerClick($event)\" *ngIf=\"draggable\">\r\n    <svg width=\"16\" height=\"10\" viewBox=\"0 0 16 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M14 6C15.1 6 16 6.9 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 6.9 12.9 6 14 6ZM6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8ZM0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6C0.9 6 0 6.9 0 8ZM4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2ZM6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2ZM12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0C12.9 0 12 0.9 12 2Z\" fill=\"black\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"msda-card-button-body\">\r\n  <msda-plate-icon [name]=\"icon\" [type]=\"iconType\" width=\"48\" height=\"48\" [color]=\"iconColor\" [background]=\"iconBackgroundColor\"></msda-plate-icon>\r\n  <div class=\"msda-card-button-text\">{{ text }}</div>\r\n</div>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        'class': 'msda-card-button',
                        '(click)': 'hostClick($event)'
                    },
                    styles: [".msda-card-button,.msda-card-button-body{border-radius:0 0 8px 8px}.msda-card-button{display:flex;flex-direction:column;background:#f7f7fa;box-shadow:0 2px 2px rgba(0,0,0,.2);cursor:pointer}.msda-card-button:hover .msda-card-button-header .msda-card-button-move-handler{opacity:1;visibility:visible}.msda-card-button .msda-card-button-body,.msda-card-button .msda-card-button-header{padding:12px 24px}.msda-card-button .msda-card-button-body .msda-card-button-text,.msda-card-button .msda-card-button-header .msda-card-button-title{font-size:11px;line-height:20px;letter-spacing:.01em;color:#333}.msda-card-button .msda-card-button-header{display:flex;align-items:center;position:relative;background:#f0f0f7;box-shadow:0 1px 0 #e0e0e0;z-index:1}.msda-card-button .msda-card-button-header .msda-card-button-title{flex:1 1 auto;font-family:BPG DejaVu Sans Caps Web}.msda-card-button .msda-card-button-header .msda-card-button-move-handler{cursor:move;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:.2s}.msda-card-button .msda-card-button-body{flex:1 1 auto;display:flex;flex-direction:row;align-items:center}.msda-card-button .msda-card-button-body .msda-card-button-text{margin-left:16px;font-family:BPG DejaVu Sans}.msda-card-button-placeholder,.sortable-placeholder{min-height:112px;border:2px dashed #333;border-radius:0 0 8px 8px}"]
                }] }
    ];
    MSDACardButton.propDecorators = {
        title: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        iconType: [{ type: Input }],
        iconColor: [{ type: Input }],
        iconBackgroundColor: [{ type: Input }],
        draggable: [{ type: Input }],
        buttonClick: [{ type: Output }]
    };
    return MSDACardButton;
}());
export { MSDACardButton };
if (false) {
    /** @type {?} */
    MSDACardButton.prototype.title;
    /** @type {?} */
    MSDACardButton.prototype.text;
    /** @type {?} */
    MSDACardButton.prototype.icon;
    /** @type {?} */
    MSDACardButton.prototype.iconType;
    /** @type {?} */
    MSDACardButton.prototype.iconColor;
    /** @type {?} */
    MSDACardButton.prototype.iconBackgroundColor;
    /** @type {?} */
    MSDACardButton.prototype.draggable;
    /** @type {?} */
    MSDACardButton.prototype.buttonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1zZGEvIiwic291cmNlcyI6WyJsaWIvY2FyZC1idXR0b24vY2FyZC1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDZixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBaUJhLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsYUFBUSxHQUFXLFFBQVEsQ0FBQztRQUM1QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHdCQUFtQixHQUFXLFNBQVMsQ0FBQztRQUV4QyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFVbEUsQ0FBQzs7Ozs7SUFSRyxrQ0FBUzs7OztJQUFULFVBQVUsQ0FBUTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLENBQVE7UUFDckIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWhDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIseW5DQUFpQztvQkFFakMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0YsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtxQkFDakM7O2lCQUNKOzs7d0JBR0ksS0FBSzt1QkFDTCxLQUFLO3VCQUVMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3NDQUNMLEtBQUs7NEJBRUwsS0FBSzs4QkFFTCxNQUFNOztJQVVYLHFCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0F0QlksY0FBYzs7O0lBRXZCLCtCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUV0Qiw4QkFBaUM7O0lBQ2pDLGtDQUFxQzs7SUFDckMsbUNBQXVDOztJQUN2Qyw2Q0FBaUQ7O0lBRWpELG1DQUFtQzs7SUFFbkMscUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21zZGEtY2FyZC1idXR0b24nLFxyXG4gICAgZXhwb3J0QXM6ICdNU0RBQ2FyZEJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1idXR0b24uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jYXJkLWJ1dHRvbi5zY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ2NsYXNzJzogJ21zZGEtY2FyZC1idXR0b24nLFxyXG4gICAgICAgICcoY2xpY2spJzogJ2hvc3RDbGljaygkZXZlbnQpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVNEQUNhcmRCdXR0b24ge1xyXG5cclxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJ2ljb24tNCc7XHJcbiAgICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nID0gJ3NxdWFyZSc7XHJcbiAgICBASW5wdXQoKSBpY29uQ29sb3I6IHN0cmluZyA9ICcjRkZGRkZGJztcclxuICAgIEBJbnB1dCgpIGljb25CYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcjRUE4NTREJztcclxuXHJcbiAgICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBidXR0b25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgaG9zdENsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25DbGljay5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVIYW5kbGVyQ2xpY2soZTogRXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=